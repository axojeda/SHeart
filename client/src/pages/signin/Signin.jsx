import React from 'react'
import './signin.scss'
import bkimage from '../../assets/bkimage.jpeg'
import { useNavigate } from 'react-router-dom'

const Signin = ( {user, setUser, setSigninInfo, signinInfo} ) => {

  const navigate = useNavigate()
  
  const handleOnChangeSignin = (event) => {
    setSigninInfo({...signinInfo, [event.target.name]: event.target.value})
  }

  //signin fetch
  const HandleOnSignin = (e) => {
    console.log(signinInfo)
    e.preventDefault()
    fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(signinInfo)
    })
    .then(response => {
      if(response.ok){
        response.json().then(userData => {
          //console.log(userData)
          // do not use localStorage for this. But in the interest of time ...
          localStorage.setItem('token', userData.token)
          setUser(userData.user)
          navigate('/Login')
        })
      }
    
    })
  }


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
    type="submit" 
    >Sign Up</button>
    <div>
    <a className='form-question'>Have an account?</a>
    </div>
    <button
    className='signup-btn'
    type="button"
    onClick={(() => navigate('/Login'))}>Log In</button>
  </form>

    </div>
  )
}

export default Signin