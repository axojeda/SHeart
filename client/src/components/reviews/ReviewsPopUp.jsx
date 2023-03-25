import React from 'react'
import './reviewsPopUp.scss'
import { useEffect, useState } from 'react'


const ReviewsPopUp = ( props ) => {

//  console.log(props.review)


  return (props.trigger) ? (
    <div className='popup'>
         <div className='popup-inner'>
        <button className='close-btn' onClick={() => props.setTrigger(false)}>X</button>
        <div className='reviews-container'>
        <div>
    {/* <h2>{props.review.user.username}</h2>
    <p>{props.review.request}</p>
       <p>{props.review.red_flag}</p>
   <p>{props.review.tea}</p>
   <p>{props.review.alert}</p>
   <p>{props.review.green_flag}</p>
     <p>{props.review.vouched}</p> */}
    </div>
          
            <button className='delete-review'>🗑️</button>
        </div>

        <div className='reviewsform-container'>

        </div>
        </div>
    </div>
  ) : ""
  
  // return (
  //   <div>
  //     <ul className='reviews-container'>
  //       <li className='reviews'>{}</li>
  //         <button className='delete-review'>🗑️</button>
  //     </ul>
  //   </div>
  
  
}

export default ReviewsPopUp