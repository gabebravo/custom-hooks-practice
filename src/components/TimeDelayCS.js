import React from 'react';
import { useTimeDelay } from '../hooks/useTimeDelay';

/*
  Instructions:
    Finish implementing the `useWait` custom Hook.
    `useWait` should return a boolean that changes from
    `false` to `true` after `delay` seconds. 
*/

export default function TimeDelayCS({ delay = 1000 }) {
  const show = useTimeDelay(delay);

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {show ? (
        <>
          <p>This text should appear after 3 seconds.</p>
        </>
      ) : (
        <p>...Loading</p>
      )}
    </div>
  );
}
