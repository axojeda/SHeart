import React from 'react'
import './userProfilePopUp.scss'
import avatar from '../../assets/avatar.jpg'

const UserProfilePopUp = ({chatPopUp, setChatPopUp}) => {


  return (
    (chatPopUp) ? (
      <div className='profilepopup'>
          <div className='popup-inside'>
          <img className='avatar-popup' src={avatar}></img>
          <button className='closeprofile-btn' onClick={() => setChatPopUp(!chatPopUp)}>X</button>
          <h2 className='username-popup'>Mariainny</h2>
              <h3 className='location-popup'>Manhattan</h3>
          </div>
      </div>
    ) : ""
    
  )
}

export default UserProfilePopUp