import React from 'react'
import './navigation.scss'
import Logo from '../../assets/rydlogo.png'
import { BrowserRouter as Router } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <div className='nav-div'> 
    {/* <div className='logo-navdiv'>
            <img className='home-logo' src={Logo}></img>
    </div> */}
    <div className='nav-div1'>
      <div className='nav-title'>
          <h1><Link id='h1nav' to='Home'>Home</Link></h1>
        </div>
        <div className='nav-title'>
          <h1><Link id='h1nav' to='Feed'>Feed</Link></h1>
        </div>
        <div className='nav-title'>
          <h1><Link id='h1nav' to='NewPost'>New post</Link></h1>
        </div>
        <div className='nav-title'>
          <h1><Link id='h1nav' to='Search'>Search</Link></h1>
        </div>
        <div className='nav-title'> 
          <h1><Link id='h1nav' to='MyProfile'>My Profile</Link></h1>
        </div>
        <div className='nav-title'>
          <h1><Link id='h1nav' to='Login'>Login</Link></h1>
        </div>
    </div>
    </div>
  )
}

export default Navigation