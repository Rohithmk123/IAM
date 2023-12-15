import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ background: '#ffffff' }}>
      <div className="container-fluid" style={{ height: '60px' }}>
        <a className="navbar-brand" href="#" style={{ marginRight: '650px', fontSize: '24px' }}>
          <img src="/logo.PNG" alt="Logo" style={{ width: '70px', height: '60px', marginRight: '10px' }} />
        </a>
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
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#" style={{ color: '#7b7f85', fontSize: '15px', marginRight: '30px' }}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ color: '#7b7f85', fontSize: '15px', marginRight: '30px' }}>
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
                style={{ color: '#7b7f85', fontSize: '15px', marginRight: '30px' }}
              >
                Quick Access
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    1. Enterococcus faecium
                  </a>
                </li>
                {/* Add more dropdown items as needed */}
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ color: '#7b7f85', fontSize: '15px', marginRight: '30px' }}>
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
