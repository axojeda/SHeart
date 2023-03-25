import React from 'react'
import './login.scss'
import bkimage from '../../assets/bkimage.jpeg'

import { useNavigate } from 'react-router-dom'

const Login = ({ handleOnChange, HandleOnLogin }) => {

  const navigate = useNavigate()
  
  return (
  <div className='form-container' style={{ backgroundImage : `url(${bkimage})`}}>
    <form className='login-form' onSubmit={HandleOnLogin}>
      <p className='welcome'>Welcome</p>
      <input 
          className='login-input' 
          name='email'
          type="email" 
          placeholder="Email" 
          onChange={handleOnChange} 
          />
      <input 
          className='login-input' 
          name='password'
          type="password" 
          placeholder="Password"
          onChange={handleOnChange} 
          />
      <input
        className='login-btn'
        type="submit" />

      <div>
          <a className='form-question'>Don't have an account?</a>
      </div>
           <button
          className='login-btn'
          type="button" onClick={(() => navigate('/Signin'))}>Sign In</button> 
  </form>
</div>
  )
}



export default Login