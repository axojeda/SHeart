import React from 'react'
import bkimage from '../../assets/bkimage.jpeg'
import { useState } from 'react'
import './postcard.scss'
import ReviewsPopUp from '../../components/reviews/ReviewsPopUp'

const PostCard = ( {post, review} ) => {

    //const [imgSrc, setImgSrc] = useState('Empty Image')
    const [buttonPopup, setButtonPopup] = useState(false);
    // create state to hold this card's reviews (probably an array)


    // define a function to handle the fetching of the reviews using this post's ID, example: `${post.id}`
    // via the Rails controller
    // at the end of this function, you will set the reviews state using the JSON from Rails

  return (
<div className='bkground' style={{ backgroundImage : `url(${bkimage})`}}>
    <div className='carddetail-container'>
        <div class="card">
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
                {/* Add a click event to this button that is an anonymous function that accepts the Post id as a param */}
             <button className='view-btn' onClick={() => setButtonPopup(true)}>Reviews</button>
             <button className='follow'>Follow</button>
        </div>
     </div>

     <ReviewsPopUp
        trigger={buttonPopup}
        setButtonPopup={setButtonPopup}
      />
 </div>
  )
}

export default PostCard