import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataFetchingTwo() {
  const [id, setId] = useState(1);
  const [post, setPost] = useState({});

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        setPost(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <p>{post.title}</p>
    </div>
  );
}

export default DataFetchingTwo;
