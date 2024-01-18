import React from 'react';

function FloatingInfoContainer() {
  return (
    <div
      style={{
        position: 'absolute',
        zIndex: '0',
        width: '70%',
        height: '200vh',
        backgroundColor: '#D6D4D4',
        overflow: 'hidden',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: 'url("/img1.jpg")', // Replace with the path to your image
        backgroundSize: 'cover', // Ensure the image covers the container
        backgroundPosition: 'center', // Center the image
      }}
    >
      {/* Content of the container */}
    </div>
  );
}

export default FloatingInfoContainer;
