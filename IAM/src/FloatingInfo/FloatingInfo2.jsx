import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function FloatingInfo2() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [position, setPosition] = useState('200px'); // Initial position
  const [isHovered, setIsHovered] = useState(false);

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
    const floatingInfo = document.getElementById('floatingInfo2');
    const floatingInfoTop = floatingInfo.offsetTop;
    const windowHeight = window.innerHeight;

    if (scrollPosition > floatingInfoTop - windowHeight / 2 && scrollPosition < floatingInfoTop + windowHeight / 2) {
      // If the scroll position is within the range, move to the center
      setPosition(`calc(35% - ${floatingInfo.offsetWidth / 2}px)`);
    } else {
      // If the scroll position is outside the range, go back to the original position
      setPosition('200px');
    }
  }, [scrollPosition]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const headingStyle = {
    position: 'absolute',
    top: '10px',
    left: '105px',
    zIndex: '1',
    color: isHovered ? 'white' : 'black', // Change color on hover
    transition: 'color 0.3s ease-in-out',
  };

  return (
    <Link to="Staphylococcus_aureus">
      <div
        id="floatingInfo2"
        style={{
          position: 'absolute',
          right: position,
          top: '900px',
          zIndex: '1',
          width: '350px',
          height: '350px',
          padding: '20px',
          backgroundColor: 'rgba(240, 240, 240, 0.8)',
          transition: 'right 0.5s ease-in-out',
          borderRadius: '50px',
          overflow: 'hidden'
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div style={{ position: 'relative' }}>
          <div
            style={{
              position: 'absolute',
              top: '-30px',
              left: '-15px',
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              backgroundColor: isHovered ? '#BFD4D5' : '#8c0303', // Change color on hover
              zIndex: '-1'
            }}
          ></div>
          <div
            style={{
              position: 'absolute',
              top: '0',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '320px',
              height: '50px',
              backgroundColor: isHovered ? '#BFD4D5' : '#8c0303', // Change color on hover
              zIndex: '-1',
              borderRadius: '10px'
            }}
          ></div>
          <div>      
      <div>

      <p></p>
            <h5 style={{ position: 'absolute', top: '12px', left: '100px',cursor: 'pointer', textDecoration: '', textAlign: 'center',  }}>Staphylococcus aureus</h5>
            </div>
          </div>
          <img
            src='/e facum.jpg' // Replace with the actual path to your image
            alt="Staphylococcus aureus Image"
            style={{ width: '90px', height: '90px', position: 'absolute',  top: '-15px', left: '-2px', zIndex: '1' }}
          /><div style={{ position:'absolute',fontSize: '15px', paddingTop: '10px', color: 'purple',top :'60px' }}>
          <div style={{ marginLeft: '25%' }}>
            <h7 style={{ fontWeight: 'bold' }}>Gram stain</h7> : Gram-negative
          </div>
          <div style={{ marginLeft: '36%' }}>
            <h7 style={{ fontWeight: 'bold' }}>Shape</h7> : Rod-shaped
          </div>
          <div style={{ marginLeft: '30%', textalign: 'justify' }}>
            <h7 style={{ fontWeight: 'bold' }}>Infection </h7> : pneumonia with symptoms like cough,
            fever, chest pain, and shortness of breath
          </div>
        </div>
        <div style={{  position:'absolute',textalign: 'justify', color: 'purple' , top :'200px'}}>
          non-motile bacterium known for its
          ability to acquire resistance genes through horizontal gene transfer. Of note,
          carbapenem-resistant K. pneumoniae strains are of particular concern.
        </div>
        </div>
      </div>
    </Link>
  );
}

export default FloatingInfo2;
