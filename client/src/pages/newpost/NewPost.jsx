import React from 'react'
import './newpost.scss'
import bkimage from '../../assets/bkimage.jpeg'
import { useState } from 'react'

const NewPost = ({ user, posts, setPosts }) => {

  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [location, setLocation] = useState('')
  const [ethnicity, setEthnicity] = useState('')
  const [image, setImage] = useState('')
  const [redFlagIcon, setRedFlagIcon] = useState(false)
  const [teaIcon, setTeaIcon] = useState(false)
  const [alertIcon, setAlertIcon] = useState(false)
  const [requestIcon, setRequestIcon] = useState(false)
  const [greenFlagIcon, setGreenFlagIcon] = useState(false)
  const [vouchedIcon, setVouchedIcon] = useState(false)
  const [formData, setFormData] = useState({
    user_id: user.id
  })
  
  console.log(user)

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then(newPost => setPosts(posts => [...posts, newPost]));
  }

  function handleChange(event){
    setFormData(formData => {
      return {...formData, [event.target.name]: event.target.value}
    })
  }
  

//pass props from post get request
  return (
    <div className='newpost-container' style={{ backgroundImage : `url(${bkimage})`}}>
    <form className='newpost-form' onSubmit={handleSubmit}>
      <p className='newpost'>Create your post</p>
      <input
            type="text"
            className='newpost-input' 
            name="name" 
            placeholder="Name" 
            onChange={handleChange}
            required
          />
      <input
            type="number"
            className='newpost-input' 
            name="age" 
            placeholder="Age"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            className='newpost-input' 
            name="location" 
            placeholder="Location"
            onChange={handleChange}
            required
          />
          <input 
            type="text"
            className='newpost-input' 
            name="ethnicity" 
            placeholder="Ethnicity"
            onChange={handleChange}
            required
          />
          <input 
            type="text"
            className='newpost-input' 
            name="post_img" 
            placeholder="Image"
            onChange={handleChange}
          />

          <br/>
          <label>🚩</label>
          <input type="checkbox"
            name="red_flag"
            value="🚩"
            onChange={handleChange}
            />
           <label>🍵</label>
          <input type="checkbox"
            name="tea"
            value="🍵"
           onChange={handleChange}
            />
            <label>⚠️</label>
          <input type="checkbox" 
           name="alert"
           value="⚠️"
           onChange={handleChange}
            />
            <label>❓</label>
          <input type="checkbox" 
            name="request"
            value="❓"
            onChange={handleChange}
            />
            <label>✅</label>
          <input type="checkbox"
            name="vouched"
            value="✅"
            onChange={handleChange}
            />
            <label>💚</label>
          <input type="checkbox"
           name="green_flag"
           value="💚"
           onChange={handleChange}
           />
      <input
        className='send-btn'
        type="submit" />
  </form>
</div>
  )
}

export default NewPost