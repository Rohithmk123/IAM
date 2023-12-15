import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const Backtotop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const triggerScroll = 200;

    setIsVisible(scrollY > triggerScroll);
    setScrollProgress((scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const containerStyle = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    display: 'flex',
    alignItems: 'center',
    transition: 'opacity 0.3s ease-in-out',
    opacity: isVisible ? 1 : 0,
  };

  const progressBarStyle = {
    height: '5px',
    backgroundColor: '#3498db',
    position: 'absolute',
    bottom: '0',
    left: '0',
    transition: 'width 0.3s ease-in-out',
    width: `${scrollProgress}%`,
  };

  const buttonStyle = {
    backgroundColor: '#3498db',
    color: '#fff',
    border: 'none',
    borderRadius: '50%',
    padding: '10px',
    cursor: 'pointer',
    fontSize: '16px',
    marginLeft: '10px',
    outline: 'none',
    transition: 'background-color 0.3s ease-in-out',
  };

  const buttonHoverStyle = {
    ...buttonStyle,
    backgroundColor: '#2980b9',
  };

  return (
    <div style={containerStyle}>
      <div style={progressBarStyle}></div>
      <button
        style={isVisible ? buttonHoverStyle : buttonStyle}
        onClick={scrollToTop}
      >
        <FaArrowUp />
      </button>
    </div>
  );
};

export default Backtotop;
