import React from 'react'
import './navigation.scss'
import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

function Navigation({ user }) {
  return (
    <div>
       <div className='logo-navdiv'><Link to='Landing'>
            <img className='home-logo' src={Logo}></img></Link>
       </div>
       <div className='nav-div'> 
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
                   <h1><Link id='h1nav' to='MyProfile'>My Profile</Link></h1>
              </div>
              <div className='nav-title'>
                  <h1><Link id='h1nav2' to='/Login'>{user?.username ? user.username : 'Login'}</Link></h1>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Navigation