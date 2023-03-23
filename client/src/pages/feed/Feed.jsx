import React from 'react'
import './feed.scss'
import { useState, useEffect } from 'react'
import PostCard from './PostCard'


const Feed = () => {

 const [posts, setPosts] =useState([])
 
  useEffect(() => {
    fetch('http://localhost:3000/posts')
    .then((r) => r.json())
    .then((postsData) => setPosts(postsData))
  }, [])


  return (
    <div className="card-container">
    <div className="card-grid">
      {posts.map((post) => (
        <PostCard post={post} key={post.id} />
      )
      )}
    </div>
  </div>
  )
}

export default Feed