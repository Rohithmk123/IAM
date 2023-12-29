import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';


function FloatingInfo1() {
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

    if (scrollPosition > floatingInfoTop - windowHeight / 2 && scrollPosition < floatingInfoTop + windowHeight / 2) {
      // If the scroll position is within the range, move to the center
      setPosition(`calc(35% - ${floatingInfo.offsetWidth / 2}px)`);
    } else {
      // If the scroll position is outside the range, go back to the original position
      setPosition('200px');
    }
  }, [scrollPosition]);

  return (<Link to="Enterococcus Page">
    <div id="floatingInfo1" style={{ position: 'absolute', left: position, top: '900px', zIndex: '1', width: '350px', height: '350px', padding: '20px', backgroundColor: 'rgba(240, 240, 240, 0.8)', transition: 'left 0.5s ease-in-out', textAlign: 'center', color: 'black',borderRadius:'50px' }}>
      {/* Add your additional information content here */}
      <div>
        
        <p style={{  textDecoration: '',textDecorationColorcolor:'black',textAlign: 'center' }}>
                 <h5 style={{  position: 'absolute', top: '20px', left: '100px' }}
                         >Enterococcus faecium.</h5> </p>
                 <img
            src='/e facum.jpg' // Replace with the actual path to your image
            alt="Enterococcus Image"
            style={{ width: '90px', height: '90px', position: 'absolute', top: '20px', left: '10px' }}
          />
      
       <div style={{ fontSize: '15px', paddingTop: '10px' }}>
      <div style={{ marginLeft: '25%' }}><h7 style={{ fontWeight:'bold' }}>Gram stain</h7> : Gram Positive</div>
            <div style={{ marginLeft: '26%'}}><h7 style={{ fontWeight:'bold' }}>Shape</h7> :   Spherical</div>
            <div style={{ marginLeft: '30%',textalign:'justify' }}> <h7 style={{ fontWeight:'bold' }}>Infection </h7> :  nosocomial
                   infections such as bacteremia, endocarditis,
                  and urinary tract and surgical wound infections.
                      </div>
                      
          </div>
          <div style={{ textalign:'justify' }}>Notably, in February 2017, the World Health Organization (WHO) designated
                            vancomycin-resistant E. faecium as a high-priority pathogen due to a significant increase in its
                           prevalence.</div>


            
     
        
      </div>
    </div>
  </Link>
  );
}

export default FloatingInfo1;
