import React from 'react'
import './login.scss'
import bkimage from '../../assets/bkimage.jpeg'

const Login = ({ handleOnChange, HandleOnLogin }) => {

  
  return (
  <div className='form-container' style={{ backgroundImage : `url(${bkimage})`}}>
    <form className='login-form' onSubmit={HandleOnLogin}>
      <p className='welcome'>Welcome</p>
      <input 
          className='login-input' 
          type="email" 
          placeholder="Email" 
          onChange={handleOnChange} 
          />
      <input 
          className='login-input' 
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
          {/* <button
          className='login-btn'
          type="button">Sign In</button> */}
  </form>
</div>
  )
}



export default Login