import React from 'react'
import bkimage from '../../assets/bkimage.jpeg'
import { useState, useRef } from 'react'
import './postcard.scss'
import ReviewsPopUp from '../../components/reviews/ReviewsPopUp'
import UserProfilePopUp from '../userProfile/UserProfilePopUp'


const PostCard = ( {post} ) => {

    //const [imgSrc, setImgSrc] = useState('Empty Image')
    const [buttonPopup, setButtonPopup] = useState(false);
    const [chatPopUp, setChatPopUp] = useState(false)
    

  const reviewsArray = post.reviews.map((review) => {
    return (
     <div className='reviews-container'>
        <h2 className='reviews-username'>
          {review.user.username}
          {review.request}
          {review.red_flag}
          {review.tea}
          {review.alert}
          {review.green_flag}
          {review.vouched}</h2>    
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
             {/* <button className='view-btn' onClick={() => setButtonPopup(true)}>Reviews</button> */}
             <ul>
             {reviewsArray}
             </ul>
             <button className='follow'>Follow</button>
        </div>
     </div>
    
 </div>
  )
}

export default PostCard