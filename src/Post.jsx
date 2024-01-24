import React, { useContext } from 'react';
import { Button } from './Button';
import { ThemeContext } from './hooks/useTheme';

const Post = ({ post }) => {
  // const theme = useContext(ThemeContext); style={{background:`${theme==="light" ?"#ccc":"#000"}`}}
  return (
    <>
      <div>
        <h2>{post.title}</h2>
        <p>{post.content}</p>
        <img src={post.image} alt="#" />
      </div>
      <Button />
    </>
  );
};

export default Post;
