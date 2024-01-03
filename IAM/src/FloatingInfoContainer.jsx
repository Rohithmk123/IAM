import React from 'react';

function FloatingInfoContainer() {
  return (
    <div
      style={{
        position: 'absolute',
        zIndex: '0', // Set a lower zIndex
        width: '70%',
        height: '200vh', // Adjust height as needed
        backgroundColor: '#D6D4D4', // Set your desired background color
        overflow: 'hidden',
        left: '50%',
        transform: 'translateX(-50%)', // Center horizontally
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* Content of the container */}
    </div>
  );
}

export default FloatingInfoContainer;
