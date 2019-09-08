import React from 'react';

export function useWindowDimensions() {
  const [height, setHeight] = React.useState(window.innerHeight);
  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const listener = () => {
      setHeight(window.innerHeight);
      setWidth(window.innerWidth);
    };

    // ADD LISTENER
    window.addEventListener('resize', listener);

    // CLEAN UP - REMOVE EL ON CWU
    return () => window.removeEventListener('resize', listener);
  });

  return {
    height,
    width
  };
}
