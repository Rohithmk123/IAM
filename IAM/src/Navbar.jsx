import React, { useState, useEffect } from 'react';

function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [scrollingUp, setScrollingUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setScrollingUp(prevScrollPos > currentScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  const navbarStyle = {
    height: scrollingUp || prevScrollPos === 0 ? '100px' : '60px',
    transition: 'height 0.3s ease',
    background: '#07beb8',
  };

  const h5Style = {
    display: scrollingUp || prevScrollPos === 0 ? 'block' : 'none',
    marginRight: scrollingUp ? '0px' : '70px',
    fontSize: '25px',
    transition: 'margin-right 0.3s ease, font-size 0.3s ease, display 0.3s ease',
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={navbarStyle}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#" style={{ marginRight: '60px', fontSize: '24px' }}>
          <img src="/logo.PNG" alt="Logo" style={{ width: '70px', height: '60px', marginRight: '10px' }} />
        </a>
        <h5 style={h5Style}>INDIAN ANTIMICROBIAL RESISTANCE DATABASE</h5>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto"> {/* Align items to the right */}
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#" style={{ color: '#4D0355', fontSize: '20px', marginRight: '20px', }}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ color: '#4D0355', fontSize: '20px', marginRight: '20px' }}>
                Features
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ color: '#4D0355', fontSize: '20px', marginRight: '30px' }}
              >
                Quick Access
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    1. Enterococcus faecium
                  </a>
                </li>
                {/* Other dropdown items */}
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ color: '#4D0355', fontSize: '20px', marginRight: '30px', }}>
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
