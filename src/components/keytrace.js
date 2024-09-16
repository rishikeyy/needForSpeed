import React, { useState, useEffect,useContext } from 'react';
import scontext from './Context';

function Keytrace() {
const context=useContext(scontext)

  useEffect(() => {
    const handleKeyPress = (event) => {
      context.setPressedKey(event.key);
    };

    window.addEventListener('keydown', context.handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [context.pressedKey]);

  return (
    context.pressedKey
  );
}

export default Keytrace;