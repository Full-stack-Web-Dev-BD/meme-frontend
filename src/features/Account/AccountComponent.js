import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { baseURL, logout } from '../../utils/constant'

const AccountComponent = ({ user }) => {
    const [country, setCountry] = useState()
    const [city, setCity] = useState()
    const [language, setLanguage] = useState()
    const submitHandler = (e) => {
        e.preventDefault()
        var udpatedUser = { ...user, country, city, language }
        axios.post(`${baseURL}/api/user/update-user`, udpatedUser)
            .then(resp => {
                console.log(resp)
                toast.success("Your  Information Update Success !!")
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div className='d-flex'>
            <div className='account_sidebar_tab_content account_sidebar_tab_content_acc'>
                <div className='p-4'>
                    <button className='btn yellow_btn pl-lg-2 text-black pr-2'>Basic Information</button>
                    <div className='text-center'>
                        <div className='profile_box' >
                            <div className='profile_circle'></div>
                            <div className='profile_image'>
                                <img src='/assets/1.png' />
                            </div>
                        </div>
                        <h4 className='text-white'  >{user?.name}</h4>
                        <button className='btn btn-danger' onClick={e => logout()}>Logout</button>

                    </div>
                    <div className='mt-lg-4'>
                        <form onSubmit={e => submitHandler(e)} className='account_form'>
                            <div className='fs_20'>
                                <label>Name</label>
                                <div>
                                    <input className='form-control ' value={user.name} disabled placeholder='Name of the uesr' />
                                </div>

                            </div>
                            <div className='mt-lg-4 mt-sm-2 fs_20'>
                                <label>E-mail</label>
                                <input className='form-control' disabled value={user.email} placeholder='user@gmail.com' />
                            </div>
                            <div className='mt-lg-4 mt-sm-2'>
                                <div className='flex_content_between '>
                                    <label className='fs_24' >Country</label>
                                    {
                                        user.country ?
                                            <div className='account_select_item w-70p'>
                                                <input className='form-control ' disabled value={user.country} placeholder='user@gmail.com' />
                                            </div> :
                                            <div className='account_select_item w-70p'>
                                                <select value={user.country} onChange={e => setCountry(e.target.value)} className='form-control'>
                                                    <option value=""> Country </option>
                                                    <option value={"United States of America"}>United States of America</option>
                                                    <option value={"India"}>India</option>
                                                    <option value={"Bangladesh"}>Bangladesh</option>
                                                </select>
                                            </div>
                                    }
                                </div>
                                <div className='flex_content_between mb-lg-4 mb-sm-2  mt-lg-4 mt-sm-2 '>
                                    <label className='fs_24' >City</label>
                                    {
                                        user.city ?
                                            <div className='account_select_item w-70p'>
                                                <input className='form-control ' disabled value={user.city} placeholder='user@gmail.com' />
                                            </div> :
                                            <div className='account_select_item w-70p'>
                                                <select onChange={e => setCity(e.target.value)} className='form-control'>
                                                    <option value="">City</option>
                                                    <option value={"Dhaka"} >Dhaka</option>
                                                    <option value={"Rongpur"} >Rongpur</option>
                                                    <option value={"Dubai"} >Dubai</option>
                                                </select>
                                            </div>
                                    }
                                </div>
                                <div className='flex_content_between '>
                                    <label className='fs_24' >Language</label>
                                    {
                                        user.language ?
                                            <div className='account_select_item w-70p'>
                                                <input className='form-control ' disabled value={user.language} />
                                            </div> :
                                            <div className='account_select_item w-70p'>
                                                <select onChange={e => setLanguage(e.target.value)} className='form-control'>
                                                    <option value="">Language</option>
                                                    <option value={"English"} >English</option>
                                                    <option value={"Urdu"} >Urdu</option>
                                                    <option value={"Bangla"} >Bangla</option>
                                                </select>
                                            </div>
                                    }
                                </div>
                                {
                                    user.language && user.country && user.city ?
                                        "" :
                                        <button type='submit' className=' btn yellow_btn'> Update  Info </button>
                                }
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className='mt-lg-auto account_meme_img ' style={{ width: '30%' }}>
                <img style={{ width: "100%" }} src='/assets/memechallengeYellow.png' />
            </div>
        </div>
    )
}

export default AccountComponent 