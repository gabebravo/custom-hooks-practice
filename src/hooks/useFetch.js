import React from 'react';

export function useFetch(url) {
  // loading, error & data state
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    // declaration for async function
    async function fetchPost() {
      try {
        // attempt fetch
        const response = await window.fetch(url);
        const post = await response.json();
        setPost(post); // set data
      } catch (error) {
        setError(error); // set error
      } finally {
        // runs last only under try/pass condiiton >> resets loading
        setIsLoading(false);
      }
    }

    // set the loading flag & make api call
    setIsLoading(true);
    fetchPost();
  }, [url]); // only re-render on url change

  return { isLoading, error, post }; // return state as obj
}
