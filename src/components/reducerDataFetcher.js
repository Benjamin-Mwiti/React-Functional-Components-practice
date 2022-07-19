import React, { useReducer, useEffect } from 'react';
import axios from 'axios';

const initialState = {
  loading: true,
  post: {},
  error: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'fetch_success':
      return {
        loading: false,
        post: action.payload,
        error: '',
      };
    case 'fetch_error':
      return {
        loading: false,
        post: {},
        error: 'Something went wrong',
      };
  }
};

function ReducerDataFetcher() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => {
        dispatch({ type: 'fetch_success', payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: 'fetch_error', payload: {} });
      });
  }, []);

  return (
    <div>
      <h2>useReducer Data Fetching</h2>
      {state.loading ? 'Loading...' : state.post.title}
      {state.error ? state.error : null}
    </div>
  );
}

export default ReducerDataFetcher;
