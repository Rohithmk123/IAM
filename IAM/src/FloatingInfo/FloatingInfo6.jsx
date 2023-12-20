import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';


function FloatingInfo6() {
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

    if (scrollPosition > floatingInfoTop + 800 - windowHeight / 2 && scrollPosition < (floatingInfoTop+1300) + windowHeight / 2) {
      // If the scroll position is within the range, move to the center
      setPosition(`calc(35% - ${floatingInfo.offsetWidth / 2}px)`);
    } else {
      // If the scroll position is outside the range, go back to the original position
      setPosition('200px');
    }
  }, [scrollPosition]);

  return (<Link to="Enterobacter spp">
    <div id="floatingInfo1" style={{ position: 'absolute', right: position, top: '1700px', zIndex: '1', width: '350px', height: '350px', padding: '20px', backgroundColor: 'rgba(240, 240, 240, 0.8)', transition: 'right 0.5s ease-in-out', borderRadius:'50px' }}>
      {/* Add your additional information content here */}
      <div>
        
        <p style={{ cursor: 'pointer', textDecoration: 'underline',textDecorationColorcolor:'black',textAlign: 'center' }}>
        <h5>Enterobacter spp</h5> 
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
           
            Various clinical syndromes, including bacteremia, lower respiratory 
tract infections, urinary tract infections, surgical site infections, and intravascular 
device-associated infections. 
                      </div>
                      
          </div>
          <div style={{ textalign:'justify', color: 'purple' }}>   The WHO listed carbapenem-resistant Enterobacteriaceae in 2017 
as a concerning antibiotic-resistant group.  </div>
      </div>
      </div>
    </div>
    </Link>
  );
}

export default FloatingInfo6;
