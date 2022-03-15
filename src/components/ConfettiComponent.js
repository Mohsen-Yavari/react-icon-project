import React from 'react';
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

// in vebsit https://www.npmjs.com/package/react-confetti


const ConfettiComponent = () => {
  const { width, height } = useWindowSize()
  return (
    <Confetti
      numberOfPieces={110}
      gravity={0.01}
      width={width }
      height={height * 1.2}
    />
  )
            
   
    
};

export default ConfettiComponent;