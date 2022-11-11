import React from 'react';

import './index.css';

function Post({title, author, text, image, highlights, date}) {
  return <div>
  <div className ="pigeonContainer">
  <img className = 'image' style={image.style} src ={image.link} image alt={image.alt}></img>
  </div>
  <h1>{title} </h1>
  <p>{date}</p>
  <p>{author} </p>
  <article>{text} </article>
  <summary>{highlights}</summary>
  
  
  </div>;
}

export default Post;
