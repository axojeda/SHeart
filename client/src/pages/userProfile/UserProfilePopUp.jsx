import React from 'react'
import './userProfilePopUp.scss'
import avatar from '../../assets/avatar.jpg'
import chat from '../../assets/chat.png'

const UserProfilePopUp = ({chatPopUp, setChatPopUp}) => {


  return (
    (chatPopUp) ? (
      <div className='profilepopup'>
          <div className='popup-inside'>
          <img className='avatar-popup' src={avatar}></img>
          <button className='closeprofile-btn' onClick={() => setChatPopUp(!chatPopUp)}>X</button>
          <h2 className='username-popup'>Dorito</h2>
              <h3 className='location-popup'>Jersey City</h3>
              <img className='chat-img' src={chat}></img>
          </div>
      </div>
    ) : ""
    
  )
}

export default UserProfilePopUp