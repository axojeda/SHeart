import React from 'react'
import './reviewsPopUp.scss'

const ReviewsPopUp = (props) => {
  return (props.trigger) ? (
    <div className='popup'>
        <div className='popup-inner'>
        <div className='reviews-container'>
            <p className='review-username'>Mariainny:</p>
            <p className='reviews'>🚩   ❓</p>
            <button className='delete-review'>🗑️</button>
        </div>

        <div className='reviewsform-container'>

        </div>
        <button className='close-btn' onClick={() => props.setTrigger(false)}>X</button>
        </div>
    </div>
  ) : ""
  
}

export default ReviewsPopUp