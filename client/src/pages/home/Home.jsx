import React from 'react'
import './home.scss'
import heart1 from '../../assets/heart1.jpeg'
import heart2 from '../../assets/heart2.jpeg'
import heart3 from '../../assets/heart3.jpeg'
import bkimage from '../../assets/bkimage.jpeg'
import { useNavigate } from 'react-router-dom'

function Home() {

  const navigate = useNavigate()

  return (
  <div className='body'>
    <div className='container'>
      <div className='card'>
       <div className='image'>
          <img className='heart' src={heart1} alt='About'/>
        </div>
          <div className='content'>
            <h3 className='About'>About</h3>
            <p className='about-info'>SHeart is a community based platform made to help women in their love journey. We are here to protect women
            and empower them. From one woman to another, no matter nationality, religion, location, age...we are all connected. Date safely, love safely.</p>
          </div>
       </div>    
      </div>

      <div className='container'>
      <div className='card'>
        <div className='image'>
          <img className='heart' src={heart3} alt='Rules' />
        </div>
          <div className='content'>
            <h3 className='About'>Rules</h3>
               <p className='about-info'>- Public display of personal information it`s not allowed (Ex. lastname, work-place, address, etc.)'</p>
               <p>- Pictures must be from a public surce ( Ex. public IG, dating apps, Google search, etc.), private pictures are not allowed.</p>
               <p>- False information will be banned and along with the user who posted it.</p>
                <p>- Abuse, disrespect, stalking and other innapropiete behavior will get you banned.</p>
                <p>- We are here to protect women not to hate men.</p>
          </div>
       </div>    
      </div>

      <div className='container'>
      <div className='card'>
        <div className='image'>
          <img className='heart' src={heart2} alt='Icons' />
        </div>
          <div className='content'>
            <h3 className='About'>Icon System</h3>
                <p className='about-info'>- 🚩 Red Flag: off behavior.</p>
                <p>- ⚠️ Alert: Potential risk, dangerous behavior/actions.</p>
                <p>- ❓ Information request: I`m seeking information.</p>
                <p>- 🍵 I got tea: I have interesting information about this person (Ex. In a rrelationship, married, etc.)</p>
                <p>- ✅ Vouched: I know this man and vouche for him.</p>
                <p>- 💚Green Flag: great behavior.</p>
          </div>
       </div>    
      </div>
      <div className='footer'>
        <button className='disclamer' onClick={(() => navigate('/Disclamer'))}>Disclamer❣️</button>
     </div>  
  </div>
  )
}

export default Home