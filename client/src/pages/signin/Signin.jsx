import React from 'react'
import './signin.scss'

const Signin = () => {
  return (
    <div className='form-container' style={{ backgroundImage : `url(${bkimage})`}}>
    <form className='login-form'>
    <p className='welcome'>Create an account</p>
    <input 
        className='login-input' 
        type="username" 
        placeholder="Username" />
    <input 
        className='login-input' 
        type="email" 
        placeholder="Email" />
    <input 
        className='login-input' 
        type="password" 
        placeholder="Password" />
     <input 
        className='login-input' 
        type="location" 
        placeholder="Location" />
    <button
    className='login-btn'
    type="button">Sign In</button>
    <div>
    <a className='form-question'>Don't have an account?</a>
    </div>
    <button
    className='login-btn'
    type="button">Sign In</button>
  </form>

    </div>
  )
}

export default Signin