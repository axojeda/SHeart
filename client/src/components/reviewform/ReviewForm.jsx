import React from 'react'
import './reviewform.scss'

const ReviewForm = () => {
  return (
    <div className='reviewform-div'>
      <h2 className='review-title'>- Leave your review:</h2>
      <form className='review-form'>  
        <label>🚩</label>
          <input type="checkbox" 
            //value={red_flag}
            //onChange={(e) =>() => handleOnChange('redFlag')}
            />
           <label>🍵</label>
          <input type="checkbox" 
            //value={tea}
           // onChange={() => handelOnChange('tea')}
            />
            <label>⚠️</label>
          <input type="checkbox" 
           // value={request}
            //onChange={() => handelOnChange('request')}
            />
            <label>❓</label>
          <input type="checkbox" 
            //value={alert}
            //onChange={() => handelOnChange('alert')}
            />
            <label>✅</label>
          <input type="checkbox" 
            //value={green_flag}
            //onChange={() => handelOnChange('greenFlag')}
            />
            <label>💚</label>
          <input type="checkbox" 
           // value={vouched}
           // onChange={() => handelOnChange('vouched')}
            />
      <input
        className='send-btn'
        type="submit" />
  </form>
    </div>
  )
}

export default ReviewForm