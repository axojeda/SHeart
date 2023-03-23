import React from 'react'
import './myprofile.scss'
import bkimage from '../../assets/bkimage.jpeg'
import avatar from '../../assets/avatar.jpg'

const MyProfile = () => {
  return(
    <div className='profile-bkground' style={{ backgroundImage : `url(${bkimage})`}}>
        <img className='avatar' src={avatar} alt="user" />
        <h1 className='username-profile'>Username</h1>
        <h2 className='location-profile'>Location</h2>
      <div>
        <button className='profile-btn'>Messages</button>
      </div>  
      <div>
        <button className='profile-btn'>My Posts</button>
      </div>  
      <div>
        <button className='profile-btn'>Log Out</button>
      </div>  
    </div>
  ) 
}

export default MyProfile