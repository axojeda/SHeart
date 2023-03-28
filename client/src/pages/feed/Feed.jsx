import React from 'react'
import './feed.scss'
import { useState, useEffect } from 'react'
import PostCard from './PostCard'
import bkimage from '../../assets/bkimage.jpeg'


const Feed = ({ user, posts, setPosts }) => {

  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('http://localhost:3000/posts')
    .then((r) => r.json())
    .then((postsData) => setPosts(postsData))
  }, [])


  return (
    <div className='search'>
    <div className='filter'>
      <input type="text"
      placeholder='Search...'
      className='search-input'
      onChange={(e) => setSearch(e.target.value)}
      />
    </div>
    <div className="card-container" style={{ backgroundImage : `url(${bkimage})`}}>
        <ul className="card-grid">
          {posts.filter((post) =>  post.name.toLowerCase().includes(search)).map((post) => (
             <PostCard user={user} setPost={setPosts} post={post} key={post.id} 
             />
           )
          )}
        </ul>
    </div>
  </div>

 
  )
}

export default Feed