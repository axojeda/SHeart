import React from 'react'
import './landing.scss'
import landingbk from '../../assets/landingbk.png'
import { useNavigate } from 'react-router-dom'

function Landing() {

  const navigate = useNavigate()
  return (
  <div>
    <div className="main">
       <div className="bg" style={{ backgroundImage : `url(${landingbk})`}}></div>
         <div className="text" style={{ backgroundImage : `url(${landingbk})`}}>YHEART
         <button className='loginlanding-btn' onClick={(() => navigate('/Login'))}>LOG IN</button>
         </div>
   </div>
  </div>
  )
}

export default Landing