import React from 'react'
import './myposts.scss'
import EmptyPost from '../../components/emptypost/EmptyPost'
import PostItem from '../../components/postitem/PostItem'
import { useState, useEffect } from 'react'

const MyPosts = ({ user, posts, setPosts }) => {

  

  // useEffect(() => {
  //   fetch('http://localhost:3000/posts')
  //   .then((r) => r.json())
  //   .then((postsData) => setPosts(postsData))
  // }, []);

  return (
    <div className='myposts'>
      <h1 className='mypost-title'>My Posts</h1>
      {/* {user.id ? (
        <div className="card-container">
          <ul className="card-grid">
            {posts.map((post) => {
              if (post.user === user) {
                return <PostItem user={user} setPost={setPosts} post={post} key={post.id} />;
              }
            })}
          </ul>
        </div>
   ) : ( */}
        <EmptyPost />
     {/* ) } */}
    </div>
  )
  ;

  // useEffect(() => {
  //   fetch('http://localhost:3000/posts')
  //   .then((r) => r.json())
  //   .then((postsData) => setPosts(postsData))
  // }, [])

  // return (
  //   user.id === post.user.id ?
  //   (<div className='myposts'>
  //   <div className="card-container">
  //       <ul className="card-grid">
  //         {posts.map((post) => {
  //            <PostItem user={user} setPost={setPosts} post={post} key={post.id} 
  //            />
  //         })}
  //       </ul>
  //   </div>
  // </div>
  //   ) : (<EmptyPost />)
 
  // )
        }

export default MyPosts