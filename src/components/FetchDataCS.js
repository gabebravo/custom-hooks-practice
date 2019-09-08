import React from 'react';
import { useFetch } from '../hooks/useFetch';
/*
  Instructions:
    Implement the `useFetch` function. 
*/

export default function FetchDataCS() {
  const postIds = [1, 2, 3, 4, 5, 6, 7, 8];
  const [index, setIndex] = React.useState(0);
  const { isLoading, error, post } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${postIds[index]}`
  );

  const getNextPost = () => {
    setIndex(index => (index === postIds.length - 1 ? 0 : index + 1));
  };

  return (
    <div className="App">
      {error ? (
        <p>Whoops! Something went wrong</p>
      ) : isLoading ? (
        <p>...Loading</p>
      ) : (
        post && (
          <>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <button onClick={getNextPost}>Next Post</button>
          </>
        )
      )}
    </div>
  );
}
