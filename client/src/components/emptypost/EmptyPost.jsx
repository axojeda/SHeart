import React from 'react'
import './emptypost.scss'
import heart4 from '../../assets/heart4.jpeg'
import { useNavigate } from 'react-router-dom'


const EmptyPost = () => {

  const navigate = useNavigate()

  return (
  <div className='body'>
    <div className='container'>
      <div className='card'>
       <div className='image'>
          <img className='heart' src={heart4} alt='About'/>
        </div>
          <div className='content'>
            <h3 className='About'>You don't have any posts!</h3>
              <button className='myposts-btn' onClick={(() => navigate('/NewPost'))}>Make a post</button>
          </div>
       </div>    
     </div>
    </div>
  )
}

export default EmptyPost