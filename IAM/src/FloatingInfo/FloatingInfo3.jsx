import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';


function FloatingInfo3() {
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

  return ( <Link to="Klebsiella pneumoniae">
    <div id="floatingInfo1" style={{ position: 'absolute', left: position, top: '1300px', zIndex: '1', width: '350px', height: '350px', padding: '20px', backgroundColor: 'rgba(240, 240, 240, 0.8)', transition: 'left 0.5s ease-in-out', borderRadius:'50px' }}>
      {/* Add your additional information content here */}
      <div>
        
        <p style={{ cursor: 'pointer', textDecoration: '',textDecorationColorcolor:'#ffff' ,textAlign: 'center'}}>
          <h5>Klebsiella pneumoniae</h5>
        </p>
        <div>
        <img
            src='/e facum.jpg' 
            alt="Enterococcus Image"
            style={{ width: '90px', height: '90px', position: 'absolute', top: '70px', left: '10px' }}
          />
      
       <div style={{ fontSize: '15px', paddingTop: '10px' , color: 'purple' }}>
      <div style={{ marginLeft: '25%' }}><h7 style={{ fontWeight:'bold' }}>Gram stain</h7> : Gram-negative</div>
            <div style={{ marginLeft: '36%'}}><h7 style={{ fontWeight:'bold' }}>Shape</h7> :   Rod-shaped</div>
            <div style={{ marginLeft: '30%',textalign:'justify' }}> <h7 style={{ fontWeight:'bold' }}>Infection </h7> :  
            pneumonia with symptoms like cough, 
            fever, chest pain, and shortness of breath
                      </div>
                      
          </div>
          <div style={{ textalign:'justify', color: 'purple' }}>  non-motile bacterium known for its 
                   ability to acquire resistance genes through horizontal gene transfer. Of note, 
                 carbapenem-resistant K. pneumoniae strains are of particular concern. </div>
      </div>
      </div>
    </div>
    </Link>
  );
}

export default FloatingInfo3;
