import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function FloatingInfo3() {
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
    const floatingInfo = document.getElementById('floatingInfo1'); // Note: Using the same ID as in the previous components, adjust if needed
    const floatingInfoTop = floatingInfo.offsetTop;
    const windowHeight = window.innerHeight;

    if (scrollPosition > floatingInfoTop + 400 - windowHeight / 2 && scrollPosition < floatingInfoTop + 400 + windowHeight / 2) {
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
    <Link to="Klebsiella_pneumoniae">
      <div
        id="floatingInfo1"
        style={{
          position: 'absolute',
          left: position,
          top: '1300px',
          zIndex: '1',
          width: '350px',
          height: '350px',
          padding: '20px',
          backgroundColor: 'rgba(240, 240, 240, 0.8)',
          transition: 'left 0.5s ease-in-out',
          borderRadius: '50px',
          overflow: 'hidden'
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
          <p> 
        
        </p>
        {/* Add your additional information content here */}
        <div style={{ position: 'relative' }}>
                                      
          <div
            style={{
              position: 'absolute',
              top: '-30px',
              left: '-15px',
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              backgroundColor: isHovered ? '#BFD4D5' : 'purple', // Change color on hover
              zIndex: '-1'
            }}
          ></div>
                                      
          <div
            style={{
              position: 'absolute',
              top: '0px',
              left: '1px',
              
              width: '320px',
              height: '50px',
              backgroundColor: isHovered ? '#BFD4D5' : 'purple', // Change color on hover
              zIndex: '-1',
              borderRadius: '10px'
            }}
          ></div>
          <div>
             <h5 style={{position:'absolute',textAlign:'',left:'100px',top:'10px'}}>Klebsiella pneumoniae</h5>
             
            
          </div>
          
          <img
            src='/e facum.jpg' // Replace with the actual path to your image
            alt="Klebsiella pneumoniae Image"
            style={{ width: '90px', height: '90px', position: 'absolute', 
            top: '-15px', left: '-2px', zIndex: '1' }}
          />
          <div style={{ position:'absolute',fontSize: '15px', paddingTop: '10px', color: 'purple',top :'60px' }}>
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

export default FloatingInfo3;
