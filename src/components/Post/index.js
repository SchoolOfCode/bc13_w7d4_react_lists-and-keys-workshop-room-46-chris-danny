import React from 'react';

import './index.css';

function Post({postTitle, postAuthor, postText}) {
  return <article>{postTitle} {postAuthor} {postText} </article>;
}

export default Post;
