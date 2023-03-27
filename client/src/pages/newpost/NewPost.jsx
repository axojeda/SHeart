import React from 'react'
import './newpost.scss'
import bkimage from '../../assets/bkimage.jpeg'
import { useState } from 'react'

const NewPost = () => {

  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [location, setLocation] = useState('')
  const [ethnicity, setEthnicity] = useState('')
  const [redFlagIcon, setRedFlagIcon] = useState(false)
  const [teaIcon, setTeaIcon] = useState(false)
  const [alertIcon, setAlertIcon] = useState(false)
  const [requestIcon, setRequestIcon] = useState(false)
  const [greenFlagIcon, setGreenFlagIcon] = useState(false)
  const [vouchedIcon, setVouchedIcon] = useState(false)

  const handleOnChange = (e) => {
    console.log(e.target.checked)
    console.log(e.target.value)
  }

//pass props from post get request
  return (
    <div className='newpost-container' style={{ backgroundImage : `url(${bkimage})`}}>
    <form className='newpost-form' >
      <p className='newpost'>Create your post</p>
      <input 
            className='newpost-input' 
            value="name" 
            placeholder="Name" 
          onChange={(e) => setName(e.target.value)} 
          />
      <input 
            className='newpost-input' 
            value="age" 
            placeholder="Age"
            onChange={(e) => setAge(e.target.value)}
          />
          <input 
            className='newpost-input' 
            value="location" 
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value) }
          />
          <input 
            className='newpost-input' 
            value="ethnicity" 
            placeholder="Ethnicity"
            onChange={(e) => setEthnicity(e.target.value)}
          />
          <input 
            className='newpost-input' 
            value="image" 
            placeholder="Image"
            //onChange={(e) => set}
          />

          <br/>
          <label>🚩</label>
          <input type="checkbox"
            value="🚩"
            onChange={handleOnChange}
            />
           <label>🍵</label>
          <input type="checkbox" 
            value="🍵"
           onChange={handleOnChange}
            />
            <label>⚠️</label>
          <input type="checkbox" 
           value="⚠️"
           onChange={handleOnChange}
            />
            <label>❓</label>
          <input type="checkbox" 
            value="❓"
            onChange={handleOnChange}
            />
            <label>✅</label>
          <input type="checkbox" 
            value="✅"
            onChange={handleOnChange}
            />
            <label>💚</label>
          <input type="checkbox" 
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

export default NewPost