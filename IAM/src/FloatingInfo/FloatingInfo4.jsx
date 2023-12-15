import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';


function FloatingInfo4() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [position, setPosition] = useState('200px'); // Initial position

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const floatingInfo = document.getElementById('floatingInfo1');
    const floatingInfoTop = floatingInfo.offsetTop;
    const windowHeight = window.innerHeight;

    if (scrollPosition > floatingInfoTop + 400 - windowHeight / 2 && scrollPosition < (floatingInfoTop+400) + windowHeight / 2) {
      // If the scroll position is within the range, move to the center
      setPosition(`calc(35% - ${floatingInfo.offsetWidth / 2}px)`);
    } else {
      // If the scroll position is outside the range, go back to the original position
      setPosition('200px');
    }
  }, [scrollPosition]);

  return (
    <div id="floatingInfo1" style={{ position: 'absolute', right: position, top: '1300px', zIndex: '1', width: '350px', height: '300px', padding: '20px', backgroundColor: 'rgba(240, 240, 240, 0.8)', transition: 'right 0.5s ease-in-out' , borderRadius:'50px'}}>
      {/* Add your additional information content here */}
      <div>
        
        <p style={{ cursor: 'pointer', textDecoration: 'underline',textDecorationColorcolor:'black' ,textAlign: 'center'}}>
         <Link to="Acinetobacter baumannii"> 1 Acinetobacter baumannii</Link>
        </p>
        
      </div>
    </div>
  );
}

export default FloatingInfo4;
