import React from 'react'
import bkimage from '../../assets/bkimage.jpeg'
import './editpost.scss'
import { useState } from 'react'

const EditPost = (props) => {

  const [formData, setFormData] = useState({})

const handleOnChange = (e) => {
  setFormData(formData => {
    return {...formData, [e.target.name]: e.target.value}
  })
}

//patch request
const onSubmit = (e) => {
  e.preventDefault()
fetch(`http://localhost:3000/posts/${props.post.id}`, {
  method: "PATCH",
  headers: { 'Content-Type': 'application/json'
 },
  body: JSON.stringify(formData)
}) //updates the front end
.then((r) => r.json())
.then(postsData => props.setPosts(posts => {
  return posts.map(p => {
    if(p.id === props.post.id){
      return {...props.post, ...postsData} //return filter for delete
    }
    else{
      return p
    }
  })
}))
}


  return (
    (props.trigger) ? (
    <div className='bg-editpost-container'>
        <div className='editpost-container' style={{ backgroundImage : `url(${bkimage})`}}>
    <form className='editpost-form' onSubmit={onSubmit}>
      <p className='editpost'>Edit your post</p>
      <input
            type="text"
            className='editpost-input' 
            name="name" 
            placeholder="Name" 
            onChange={handleOnChange}
          />
      <input
            type="number"
            className='editpost-input' 
            name="age" 
            placeholder="Age"
            onChange={handleOnChange}
          />
          <input
            type="text"
            className='editpost-input' 
            name="location" 
            placeholder="Location"
            onChange={handleOnChange}
          />
          <input 
            type="text"
            className='editpost-input' 
            name="ethnicity" 
            placeholder="Ethnicity"
            onChange={handleOnChange}
          />
          <input 
            type="text"
            className='editpost-input' 
            name="post_img" 
            placeholder="Image"
            onChange={handleOnChange}
          />

          <br/>
          <label>🚩</label>
          <input type="checkbox"
            name="red_flag"
            value="🚩"
            onChange={handleOnChange}
            />
           <label>🍵</label>
          <input type="checkbox"
            name="tea"
            value="🍵"
           onChange={handleOnChange}
            />
            <label>⚠️</label>
          <input type="checkbox" 
           name="alert"
           value="⚠️"
           onChange={handleOnChange}
            />
            <label>❓</label>
          <input type="checkbox" 
            name="request"
            value="❓"
            onChange={handleOnChange}
            />
            <label>✅</label>
          <input type="checkbox"
            name="vouched"
            value="✅"
            onChange={handleOnChange}
            />
            <label>💚</label>
          <input type="checkbox"
           name="green_flag"
           value="💚"
           onChange={handleOnChange}
           />
      <input
        className='editsend-btn'
        type="submit" />
  </form>
  <button className='edit-closebtn' onClick={() => props.setTrigger(false)}>X</button>
</div>
    </div> 
    ) : ""
  )
}

export default EditPost