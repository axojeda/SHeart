import React from 'react'
import './search.scss'
import { useState, useEffect } from 'react'
import PostCard from '../feed/PostCard'

const Search = () => {

    const [posts, setPosts ] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
      fetch('http://localhost:3000/posts')
      .then((r) => r.json())
      .then((postsData) => setPosts(postsData))
    }, [])

    //console.log(posts.filter(post => post.name.toLowerCase().includes('ja')))
   
  return (
  <div className='search'>
    <div className='filter'>
      <input type="text"
      placeholder='Search...'
      className='search-input'
      onChange={(e) => setSearch(e.target.value)}
      />
    </div>
    <div className="card-container">
        <div className="card-grid">
          {posts.filter((post) =>  post.name.toLowerCase().includes(search)).map((post) => (
             <PostCard post={post} key={post.id} 
             />
           )
          )}
        </div>
    </div>
  </div>
  )
}

export default Search