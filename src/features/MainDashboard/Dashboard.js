import React, { Component, useEffect } from 'react'
import DashboardChat from './DashboardChat/DashboardChat'
import DashboardMainContent from './DashboardMainContent/DashboardMainContent'
import DashboardSidebar from './DashboardSidebar/DashboardSidebar'
import queryString from 'query-string';
import socketIOClient from 'socket.io-client'
import "./dashboard.css"
import { baseURL } from '../../utils/constant';
import axios from 'axios'

var socket
export class Dashboard extends Component {
  state = {
    users: [],
    chatHistory: [],
    name: '',
    error: '',
    room: '',
    userID: '',
    roomDetails: {},
    topic: ''
  }
  async componentDidMount() {
    const { name, room, topic } = queryString.parse(window.location.search);
    if (!name || !room) return window.location.href = '/'
    this.setState({ ...this.state, name: name, room: room, topic: topic })

    var dbChatHistory = await axios.get(`${baseURL}/api/chat/${room}`)
    await this.setState({ ...this.state, chatHistory: [...dbChatHistory.data] })
    socket = socketIOClient(baseURL, { transports: ['websocket', 'polling', 'flashsocket'] })
    socket.emit('join', { name, room, topic }, async (error) => {
      if (error) {
        this.setState({ ...this.state, error: error });
      }
    });
    socket.on("message", async (data) => {
      console.log(this.state)
      if (!this.state.userID) {
        this.setState({ ...this.state, uid: data.sms.uid, chatHistory: [...this.state.chatHistory, { sms: data.sms }] })
        this.getRoom()
      } else {
        this.setState({ ...this.state, chatHistory: [...this.state.chatHistory, { sms: data.sms }] })
        this.getRoom()
      }
    })
    socket.on('roomUpdate', data => {
      this.setState({ ...this.state, roomDetails: data.room })
    })
  }
  getRoom = () => {
    axios.post(`${baseURL}/api/room/find`, { roomName: this.state.room })
      .then(resp => {
        this.setState({ ...this.state, roomDetails: resp.data })
      })
      .catch(err => {
        console.log(err)
      })
  }
  sendSms = (sms) => {
    socket.emit('sendMessage', { message: sms })
  }
  render() {
    return (
      <div className='dashboard_container '>
        {/* <button onClick={e => console.log(this.state)}>  log </button> */}
        <div className='dashboard_sidebar'>
          <DashboardSidebar state={this.state} />
        </div>
        <div className='dashboard_main_content'>
          <DashboardMainContent state={this.state} />
        </div>
        <div className='dashboard_chat'>
          <DashboardChat sendSMS={this.sendSms} state={this.state} />
        </div>
      </div>
    )
  }
}

export default Dashboard