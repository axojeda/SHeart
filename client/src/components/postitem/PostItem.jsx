import React from 'react'
import UserProfilePopUp from '../../pages/userProfile/UserProfilePopUp'
import { useState } from 'react'
import './postitem.scss'
import EditPost from '../editpost/EditPost'

const PostItem = ({ user, post, setPosts}) => {


  const [chatPopUp, setChatPopUp] = useState(false)
  const [editPopup, setEditPopup] = useState(false)


  const deletePost = () => {
    fetch(`http://localhost:3000/posts/${post.id}`, {
      method: "DELETE"
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to delete post');
      }
      return response;
    })
    .then(() => {
      setPosts(posts => posts.filter(p => p.id !== post.id));
    })
  };
  // const deletePost = () => {
  //   fetch(`http://localhost:3000/posts/${post.id}`, {
  //     method: "DELETE"
  //   })
  //   .then(r => r.json())
  //   .then(postsData => setPosts(posts => {
  //     return posts.map(p => {
  //       if(p.id === post.id){
  //         return {...p, posts: p.posts.filter(r => {
  //           return r.id !== post.id
  //         })}
  //       }
  //       else{
  //         return p
  //       }
  //     })
  //   }))
  // }
  

  return (
   
    <div className='bkground-mypost'>
    <UserProfilePopUp trigger={chatPopUp} />
    
  <div className='carddetailmypost-container'>
      <div className="card-mypost">
      <button className='chat-mypost' onClick={() => setChatPopUp(true)}>Chat</button>
          <h1 className='username-feedmypost'>{post.user ? post.user.username : 'User Not Found'}</h1>
          <p className='guy-infomypost'>
              👤{post.name} - 
              🎂{post.age} - 
              📍{post.location} - 
              🌎{post.ethnicity}
              </p>
          <img className='postfeed-imgmypost'   
              src={post.post_img} 
              alt='man'
              />
          <p className='icons-postmypost'>
              {post.red_flag}
              {post.alert}
              {post.tea}
              {post.request}
              {post.green_flag}
              {post.vouched}</p>
           <button className='follow-mypost'>Follow</button>
           <button className='delete-mypost' onClick={deletePost}>Delete</button>
           <button className='edit-mypost'onClick={() => setEditPopup(true)} >Edit</button>
      </div>
   </div>     
          <EditPost trigger={editPopup} post={post} setPosts={setPosts}/>
</div>
   
)
  
}

export default PostItem