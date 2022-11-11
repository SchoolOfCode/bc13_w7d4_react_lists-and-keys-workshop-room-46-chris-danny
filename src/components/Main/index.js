import React, { useState } from 'react';

import './index.css';

import samplePosts from '../../libs/data';

import Post from '../Post';

function Main() {
  const [posts, setPosts] = useState(samplePosts);

console.log(posts)

  return <main id="main">
   {posts.map(
    (post)=> {
     return <Post
    key = {post.postId}
    title = {post.title} 
    author = {post.author}
    text = {post.text}
    date = {post.date}
    highlights = {post.highlights.map((item, index) => {
      return <li key={index}>{item}</li>
    })}

      image = {post.image}
      />
    }
    
    
   )}
  </main>;
}

export default Main;
