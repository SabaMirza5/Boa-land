

import React, { useState, useEffect } from 'react';

const Text = ({ text, speed }) => {
  const [displayText, setDisplayText] = useState('hello');
  const characters = text.split('');

  let timer;

  useEffect(() => {
    const frameLooper = () => {
      if (characters.length > 0) {
        setDisplayText((prevText) => prevText + characters.shift());
      } else {
        clearTimeout(timer);
      }
      timer = setTimeout(frameLooper, speed);
    };

    frameLooper();

    return () => clearTimeout(timer); // Cleanup on component unmount
  }, [characters, speed]);

  return <span id="text">{displayText}</span>;
};

export default Text;











