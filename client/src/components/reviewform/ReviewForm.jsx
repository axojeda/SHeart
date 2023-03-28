import React from 'react'
import './reviewform.scss'
import { useState } from 'react'

const ReviewForm = ({ userID, postID, setPosts }) => {

  const [formData, setFormData] = useState({
    user_id: userID,
    post_id: postID
  })


  const handleOnSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:3000/reviews', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
    .then((res) => res.json())
    .then(newReview => setPosts(posts => {
      return posts.map(post => {
        if(post.id === postID){
          return {...post, reviews: [...post.reviews, newReview]}
        }
        else{
          return post
        }
      })
    }))
  }

  const handleOnChange = (e) => {
    if(e.target.checked){
      setFormData(formData => {
        return {...formData, [e.target.name]: e.target.value}
      })
    }
    else{
      setFormData(formData => {
        return {...formData, [e.target.name]: null}
      })
    }
  }

  return (
    <div className='reviewform-div'>
      <h2 className='review-title'>- Leave your review:</h2>
      <form className='review-form' onSubmit={handleOnSubmit}>  
        <label>🚩</label>
          <input 
            className='icon-input'
            type="checkbox" 
            name="red_flag"
            value="🚩"
            onChange={handleOnChange}
            />
           <label>🍵</label>
          <input 
            className='icon-input'
            type="checkbox" 
            name="tea"
            value="🍵"
            onChange={handleOnChange}
            />
            <label>⚠️</label>
          <input 
            className='icon-input'
            type="checkbox" 
            name="alert"
            value="⚠️"
            onChange={handleOnChange}
            />
            <label>❓</label>
          <input 
            className='icon-input'
            type="checkbox" 
            name="request"
            value="❓"
            onChange={handleOnChange}
            />
            <label>✅</label>
          <input 
            className='icon-input'
            type="checkbox" 
            name="vouched"
            value="✅"
            onChange={handleOnChange}
            />
            <label>💚</label>
          <input 
           className='icon-input'
           type="checkbox" 
           name="green_flag"
           value="💚"
           onChange={handleOnChange}
            />
      <input
        className='send-btn'
        type="submit" />
  </form>
    </div>
  )
}

export default ReviewForm