import React, { useEffect, useState } from 'react'
import "./dashboardChat.css"
import SendIcon from '@mui/icons-material/Send';
import { appState } from '../../../states/appState';
import { useRecoilState } from 'recoil';
import BuyModal from './BuyModal';

const DashboardChat = ({ state, sendSMS }) => {
  const [getAppState, setAppState] = useRecoilState(appState)
  const [Sms, setSms] = useState()
  const handleMessage = (e) => {
    e.preventDefault()
    sendSMS(Sms);
    setSms('')
  }
  // useEffect(() => {
  //   window.onbeforeunload = function (event) {
  //     return window.confirm("Confirm refresh");
  //   };
  // }, [])
  return (
    <div className='dashboard_chat_inner'>
      <div className='profile_bar'>
        <div className='d-inline '>
          <div className='acc_nav_holder'>
            <div className='account_nav d-flex' >
              <div className='pn_profile_box' >
                <div className='pn_profile_circle'></div>
                <div className='pn_profile_img'>
                  <img src='/assets/1.png' />
                </div>
              </div>
              <h2> {getAppState.user?.name} </h2>
              <div className='user_dropdown'>
                <ul>
                  <li>Log Out</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='db_chat_box'>
        <button data-toggle="tooltip" className='btn yellow_btn text_black tc'> {state.room} </button>
        <div className='chat_history'>
          {
            state.chatHistory.map((signleChat, i) => {
              return <>
                <div key={i} className='single_chat'  >
                  <div className='chat_user'>
                    <img src='/assets/1.png' />
                    <div className='chat_msg'>
                      <span className='c_user_name' > {signleChat.sms.user}  </span>
                      <p> {signleChat.sms.text} </p>
                    </div>
                  </div>
                </div>
              </>
            })
          }
        </div>
        <div className='dc_egg_count'>
          <div className='dc_egg'>
            <div className='dc_egg_layout' >
              <div className='ec_egg_container'>
                <span> {getAppState.user.balance.paidEsterEggs} </span>
                <img src='/assets/ester.png' />
                <span> {getAppState.user.balance.paidRottenEggs} </span>
                <img src='/assets/rotten.png' />
              </div>
            </div>
            <div className='dc_chat_box'>
              <div className='dc_input_grup'>
                <form onSubmit={e => handleMessage(e)}>
                  <input required value={Sms} onChange={e => setSms(e.target.value)} placeholder='Send A Message' className='form-control' />
                  <span>
                    <button style={{ all: 'unset' }} type='submit' > <SendIcon /> </button>
                  </span>
                </form>
              </div>
              <BuyModal />
            </div>
          </div>
        </div>
      </div>

    </div >
  )
}

export default DashboardChat