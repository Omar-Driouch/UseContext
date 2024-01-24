import React, { useState } from 'react';
import Posts from './Posts';

const Blog = () => {
    const [posts, setPosts] = useState([
        { id: 1, title: 'Article 1', content: 'Contenu de l\'article 1',image:'https://placehold.co/200' },
        // { id: 2, title: 'Article 2', content: 'Contenu de l\'article 2',image:'https://placehold.co/200' }
    
    ]);
    

    return (
        <div>
            <h1>Mon Blog</h1>
            <Posts posts={posts} />
        </div>
    );
};

export default Blog;
