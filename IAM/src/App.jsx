import React from 'react';
import Contents from './Contents';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FloatingInfoContainer from './FloatingInfoContainer';
import FloatingInfo1 from './FloatingInfo/FloatingInfo1';
import FloatingInfo2 from './FloatingInfo/FloatingInfo2';
import FloatingInfo3 from './FloatingInfo/FloatingInfo3';
import FloatingInfo4 from './FloatingInfo/FloatingInfo4';
import FloatingInfo5 from './FloatingInfo/FloatingInfo5';
import FloatingInfo6 from './FloatingInfo/FloatingInfo6';
import Footer from './Footer';
import BackToTop from './Backtotop';

function App() {
  return (
  
      <div>
        <Navbar />
        <br /><br /><br /><br /><br />
        <Contents />
       
        <FloatingInfoContainer/>
        <FloatingInfo1 />
        <FloatingInfo2 />
        <FloatingInfo3 />
        <FloatingInfo4 />
        <FloatingInfo5 />
        <FloatingInfo6 />
      
        <BackToTop />

        <div>
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          
          <br />
          <Footer />
        </div>
      </div>
  
  );
}

export default App;
