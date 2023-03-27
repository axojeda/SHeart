import React from 'react'
import bkimage from '../../assets/bkimage.jpeg'
import { useState, useRef } from 'react'
import './postcard.scss'
import UserProfilePopUp from '../userProfile/UserProfilePopUp'
import ReviewForm from '../../components/reviewform/ReviewForm'


const PostCard = ( { post } ) => {


    const [chatPopUp, setChatPopUp] = useState(false)
    

    //fetch reviews
  const reviewsArray = post.reviews.map((review) => {
    return (
    
     <div className='reviews-container'>
        <h3 className='reviews-username'>
          {review.user.username} - 
          {review.request}
          {review.red_flag}
          {review.tea}
          {review.alert}
          {review.green_flag}
          {review.vouched}
          <button className='delete-review'>🗑️</button>
          </h3>  
     </div>

 )
  })

  return (
  <div className='bkground' style={{ backgroundImage : `url(${bkimage})`}}>
      <UserProfilePopUp trigger={chatPopUp} />
    <div className='carddetail-container'>
        <div className="card">
        <button className='chat' onClick={() => setChatPopUp(true)}>Chat</button>
            <h1 className='username-feed'>{post.user.username}</h1>
            <p className='guy-info'>
                👤{post.name} - 
                🎂{post.age} - 
                📍{post.location} - 
                🌎{post.ethnicity}
                </p>
            <img className='postfeed-img'   
                src={post.post_img} 
                alt='man'
                />
            <p className='icons-post'>
                {post.red_flag}
                {post.alert}
                {post.tea}
                {post.request}
                {post.green_flag}
                {post.vouched}</p>
             <button className='follow'>Follow</button>
        </div>
        <ReviewForm />
        <h3 className='reviews-title'>Reviews:</h3>
        {reviewsArray}
     </div>
       
 </div>
  )
}

export default PostCard