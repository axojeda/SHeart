import React from 'react'
import './newpost.scss'
import bkimage from '../../assets/bkimage.jpeg'
import { useState } from 'react'

const NewPost = () => {

  const [redFlag, setRedFlag] = useState(true)
  const [tea, setTea] = useState(true)
  const [alert, setAlert] = useState(true)
  const [request, setRequest] = useState(true)
  const [greenFlag, setGreenFlag] = useState(true)
  const [vouched, setVouched] = useState(true)

//pass props from post get request
  return (
    <div className='newpost-container' style={{ backgroundImage : `url(${bkimage})`}}>
    <form className='newpost-form' >
      <p className='newpost'>Create your post</p>
      <input 
            className='newpost-input' 
            type="name" 
            placeholder="Name" 
          //onChange={handleOnChange} 
          />
      <input 
            className='newpost-input' 
            type="age" 
            placeholder="Age"
          // onChange={}
          />
          <input 
            className='newpost-input' 
            type="location" 
            placeholder="Location"
          // onChange={}
          />
          <input 
            className='newpost-input' 
            type="ethnicity" 
            placeholder="Ethnicity"
          // onChange={}
          />
          <input 
            className='newpost-input' 
            type="" 
            placeholder="Image"
          // onChange={}
          />

          <br/>
          <label>🚩</label>
          <input type="checkbox" 
            //value={red_flag}
            //onChange={(e) =>{() => handleOnChange('redFlag') }
            />
           <label>🍵</label>
          <input type="checkbox" 
            value={tea}
            //onChange={() => handelOnChange('tea')}
            />
            <label>⚠️</label>
          <input type="checkbox" 
            value={request}
            //onChange={() => handelOnChange('request')}
            />
            <label>❓</label>
          <input type="checkbox" 
            value={alert}
            //onChange={() => handelOnChange('alert')}
            />
            <label>✅</label>
          <input type="checkbox" 
            value={greenFlag}
            //onChange={() => handelOnChange('greenFlag')}
            />
            <label>💚</label>
          <input type="checkbox" 
            value={vouched}
            //onChange={() => handelOnChange('vouched')}
            />
      <input
        className='send-btn'
        type="submit" />


  
  </form>
</div>
  )
}

export default NewPost