import React from 'react'
import './myposts.scss'
import EmptyPost from '../../components/emptypost/EmptyPost'
import PostsItem from '../../components/postitem/PostsItem'

const MyPosts = () => {
  return (
    <div className='myposts-container'>
        <h1 className='mypost-title'>My Posts</h1>
        <div className='post-menu'>
          <EmptyPost />
        </div>
    </div>
  )
}

export default MyPosts