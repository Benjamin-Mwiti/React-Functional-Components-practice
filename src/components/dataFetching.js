import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataFetching() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setPosts(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h2>Posts</h2>
      {posts.length
        ? posts.map((post) => <p key={post.id}>{post.title}</p>)
        : null}
    </div>
  );
}

export default DataFetching;
