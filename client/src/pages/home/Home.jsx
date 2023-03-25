import React from 'react'
import './home.scss'
import heart1 from '../../assets/heart1.jpeg'
import heart2 from '../../assets/heart2.jpeg'
import heart3 from '../../assets/heart3.jpeg'

function Home() {
  return (
  <div className='body'>
    <div className='container'>
      <div className='card'>
       <div classNane='image'>
          <img className='heart' src={heart1} alt='About'/>
        </div>
          <div className='content'>
            <h3 className='About'>About</h3>
            <p className='about-info'>SHeart is a community based platform to help women in their love journey. Unfortunatelly we live in a society where
            women need to be protected, dating, marriage, relationships, even friendshisps can be difficult.</p>
          </div>
       </div>    
      </div>

      <div className='container'>
      <div className='card'>
        <div classNane='image'>
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
        <div classNane='image'>
          <img className='heart' src={heart2} alt='Icons' />
        </div>
          <div className='content'>
            <h3 className='About'>Icon System</h3>
                <p className='about-info'>- 🚩 Red Flag: off behavior.</p>
                <p>- ⚠️ Alert: Potential risk, dangerous behavior/actions.</p>
                <p>- ❓ Information request: I`m seeking information.</p>
                <p>- 🍵 I got tea: I have interesting information about this person (Ex. In a rrelationship, married, etc.)</p>
                <p>- ✅ Vouched: I personally know this man and a vouche for him.</p>
                <p>- 💚Green Flag: great behavior.</p>
          </div>
       </div>    
      </div>
      
  </div>
  )
}

export default Home