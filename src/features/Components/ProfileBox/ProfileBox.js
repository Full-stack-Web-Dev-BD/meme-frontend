import React from 'react'
import "./profilebox.css"
const ProfileBox = ({ name, smName }) => {
  return (
    <div className=''>
      {
        smName ?
          <div className=' mt-2 ml-5'>
            <div className='p_box'>
              <div className='p_name_img_box' >
                <div className='p_photo_box' >
                  <div className='p_black_circle'></div>
                  <div className='p_img'>
                    <img src='/assets/1.png' />
                  </div>
                </div>
                <h5 className='text_black' style={{ lineHeight: "46px", marginLeft: '15px' }}> {name ? name : 'User Name'} </h5>
              </div>
            </div>
          </div> :
          <div className='mt-5 ml-5'>
            <div className='p_box'>
              <div className='p_name_img_box' >
                <div className='p_photo_box' >
                  <div className='p_black_circle'></div>
                  <div className='p_img'>
                    <img src='/assets/1.png' />
                  </div>
                </div>
                <h2 className='text_black'> {name ? name : 'User Name'} </h2>
              </div>
            </div>
          </div>
      }
    </div>
  )
}

export default ProfileBox