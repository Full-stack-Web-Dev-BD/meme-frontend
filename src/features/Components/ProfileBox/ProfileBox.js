import React from 'react'
import "./profilebox.css"
const ProfileBox = ({name}) => {
  return (    
    <div className='mt-5 ml-5'>
    <div className='p_box'>
      <div className='p_name_img_box' >
        <div className='p_photo_box' >
          <div className='p_black_circle'></div>
          <div className='p_img'>
            <img src='/assets/1.png' />
          </div>
        </div>
        <h2 className='text_black'> {name? name:'User Name'} </h2>
      </div>
    </div>
  </div>
  )
}

export default ProfileBox