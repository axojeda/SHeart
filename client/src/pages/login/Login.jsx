import React from 'react'
import './login.scss'
import bkimage from '../../assets/bkimage.jpeg'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Login = ({ user, setUser, setLoginInfo, loginInfo }) => {

  const navigate = useNavigate()

  const handleOnChange = (event) => {
    setLoginInfo({...loginInfo, [event.target.name]: event.target.value})
  }
  
  // //login fetch
  const HandleOnLogin = (e) => {
    e.preventDefault()
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(loginInfo)
    })
    .then(response => {
      if(response.ok){
        response.json().then(userData => {
          //console.log(userData)
          // do not use localStorage for this. But in the interest of time ...
          localStorage.setItem('token', userData.token)
          setUser(userData.user)
          navigate('/Home')
        })
      }
      else if(response.status === 401){
        alert("Error: Invalid username or password! Please try again!")
      }
      else{
        alert(`Error: ${response.status} ${response.statusText}`)
      }
    })
  }
  
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
      <button
        className='login-btn'
        type="submit"
        >Log In
        </button>

      <div>
          <a className='form-question'>Don't have an account?</a>
      </div>
           <button
          className='login-btn'
          type="button" onClick={(() => navigate('/Signin'))}>Sign Up</button> 
  </form>
</div>
  )
}



export default Login