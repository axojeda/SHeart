import React from 'react'
import './signin.scss'
import bkimage from '../../assets/bkimage.jpeg'
import { useNavigate } from 'react-router-dom'

const Signin = ( {handleOnChangeSignin, HandleOnSignin} ) => {

  const navigate = useNavigate()
  

  return (
    <div className='signupform-container' style={{ backgroundImage : `url(${bkimage})`}}>
    <form className='signuplogin-form' onSubmit={HandleOnSignin}>
    <p className='create'>Create an account</p>
    <input 
        className='signup-input' 
        name='username'
        type="username" 
        placeholder="Username"
        onChange={handleOnChangeSignin} />
    <input 
        className='signup-input' 
        name='email'
        type="email" 
        placeholder="Email"
        onChange={handleOnChangeSignin}  />
    <input 
        className='signup-input' 
        name='password'
        type="password" 
        placeholder="Password" 
        onChange={handleOnChangeSignin} />
     <input 
        className='signup-input' 
        name='location'
        type="location" 
        placeholder="Location" 
        onChange={handleOnChangeSignin} />
    <button
    className='signup-btn'
    type="submit" >Sign In</button>
    <div>
    <a className='form-question'>Have an account?</a>
    </div>
    <button
    className='signup-btn'
    type="button">Log In</button>
  </form>

    </div>
  )
}

export default Signin