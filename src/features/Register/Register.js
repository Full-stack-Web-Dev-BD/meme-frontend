import React, { useState } from 'react'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/PageHeader'
import { toast } from 'react-toastify'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import "./register.css"
import axios from 'axios'
import { baseURL } from '../../utils/constant';
import { Link } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const submitHandler = (e) => {
    e.preventDefault()
    axios.post(`${baseURL}/api/user/register`, {
      name: name,
      email: email,
      password: password,
    })
      .then(res => {
        toast.success("Registration Success ")
        setTimeout(() => {
          window.location.href = '/'
        }, 2000);
      })
      .catch(err => {
        if (err.response) {
          Object.keys(err.response.data).map(e => {
            console.log(e, err.response.data[e])
            toast.error(err.response.data[e])
          })
        }
      })
  }
  return (
    <div className='register_page'>
      <Header content="none" />
      <div className='register_content '>
        <div className='meme_challange'>
          <div className='meme_challange_content'>
            <img src="/assets/memechallengeYellow.png" />
          </div>
        </div>
        <div className='container mt-5 '>
          <div className='row'>
            <div className='col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-sm-12'>
              <div className='register_card'>
                <div className='register_or'>
                  <span>OR</span>
                </div>
                <div className='_register'>
                  <div className='register_login_area' >
                    <button className='btn register_social_btn fb_login_btn'> <span><FacebookOutlinedIcon style={{ color: 'white', fontSize: '22px' }} /></span> Login With Facebook</button><br />
                    <button className='btn register_social_btn twitter_login_btn'> <span><TwitterIcon style={{ color: 'white', fontSize: '22px' }} /></span> Login With Twitter</button><br />
                    <button className='btn register_social_btn google_login_btn'> <span style={{ opacity: '0' }}><YouTubeIcon style={{ color: 'white', fontSize: '22px' }} /> </span>Login with Google</button><br />
                    <p className=' text-white'>Already have account , <Link to="/" >Go to Login</Link>  </p>
                  </div>
                  <div className='register_sm_or'>
                    <span>OR</span>
                  </div>
                  <div className='register_subscribe_area' >
                    <div className='register_subscribe_area_title'>
                      <h2>SUBSCRIBE MANUALLY</h2>
                    </div>
                    <div>
                      <form onSubmit={e => submitHandler(e)} >
                        <div className='gray_input text-center'>
                          <input name='name' required onChange={e => setName(e.target.value)} className='form-control register_subscribe_input' placeholder='Name' />
                          <input name='email' type="email" required onChange={e => setEmail(e.target.value)} className='form-control register_subscribe_input' placeholder='E-mail' />
                          <input name='password' type={'password'} required onChange={e => setPassword(e.target.value)} className='form-control register_subscribe_input mb-4' placeholder='Password' />
                        </div>
                        <div className='text-center'>
                          <button type='submit' className='btn btn_subscribe yellow_btn'>Register</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Register