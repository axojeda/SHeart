import React from 'react'
import './myposts.scss'
import EmptyPost from '../../components/emptypost/EmptyPost'
import PostItem from '../../components/postitem/PostItem'
import { useState, useEffect } from 'react'

const MyPosts = ({ user, posts, setPosts }) => {


  useEffect(() => {
    fetch('http://localhost:3000/posts')
    .then((r) => r.json())
    .then((postsData) => setPosts(postsData))
  }, [])

 
 
  return (
    <div className='myposts'>
      <h1 className='mypost-title'>My Posts</h1>
        <div className="card-container">
          <ul className="card-grid">
            {posts.length > 1  ? 
            posts.map((post) => {
              if(user.id === post.user_id) return <PostItem user={user} setPosts={setPosts} post={post} key={post.id} />;
            }) :
            <EmptyPost />}
          </ul>
        </div>
    </div>
  )

 };

export default MyPosts