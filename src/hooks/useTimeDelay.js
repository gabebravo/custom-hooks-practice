import React from 'react';

// MY VERSION >> mine works the same, but cause more re-renders because I dont do cleanup
// export function useTimeDelay(delay) {
//   const [isWaiting, setWaitFlag] = React.useState(false);

//   setTimeout(function() {
//     setWaitFlag(st => setWaitFlag(true));
//   }, delay);

//   return isWaiting;
// }

// TMG VERSION
export function useTimeDelay(delay) {
  const [isWaiting, setWaitFlag] = React.useState(false);

  React.useEffect(() => {
    const id = window.setTimeout(() => {
      setWaitFlag(true);
    }, delay);
    return () => window.clearTimeout(id);
  }, [delay]);

  return isWaiting;
}
