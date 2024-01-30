import React, { useContext } from 'react';
import { Button } from './Button';
import { ThemeContext } from './hooks/useTheme';

const Post = ({ post }) => {
   const ContextTheme = useContext(ThemeContext); 
  return (
    <>
      <div
        style={{background: `${ContextTheme.theme === "light" ? "#ccc" : "#000"}` }}
      >
        <h2>{post.title}</h2>
        <p>{post.content}</p>
        <img src={post.image} alt="#" />
      </div>
      <Button />
    </>
  );
};

export default Post;
