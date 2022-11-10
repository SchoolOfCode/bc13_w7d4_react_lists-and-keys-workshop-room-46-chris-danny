import React, { useState } from 'react';

import './index.css';

import samplePosts from '../../libs/data';

import Post from '../Post';

function Main() {
  const [posts, setPosts] = useState(samplePosts);
console.log(posts)
  return <main id="main">
   {posts.map((postObject)=>{
     return <Post
    postTitle = {postObject.title} 
    postAuthor = {postObject.author}
    postText={postObject.text} 
    key={postObject.postId}
     />;
    
   })}
  </main>;
}

export default Main;
