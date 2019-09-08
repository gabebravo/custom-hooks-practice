import React from 'react';
import { useWindowDimensions } from '../hooks/useWindowDimensions';

/*
  Instructions:
    You're given a `useWindowDimensions` custom Hook. Your
    job is to finish implementing it. It should return
    an object with a `width` property that represents the current
    width of the window and a `height` property which represents
    the current height. 

    To get those values, you can use the `window.addEventListener`
    API. https://developer.mozilla.org/en-US/docs/Web/API/Window/resize_event
*/

export default function WindowDimensionsCS() {
  const { width, height } = useWindowDimensions();

  return (
    <div className="App">
      <h2>width: {width}</h2>
      <h2>height: {height}</h2>
      <p>Resize the window.</p>
    </div>
  );
}
