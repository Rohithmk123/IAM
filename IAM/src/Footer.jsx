import React from 'react';
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <p>&copy; 2023 Your Website Name. All rights reserved.</p>
        <div style={styles.links}>
          <a href="/" style={styles.link}>Home</a>
          <a href="/about" style={styles.link}>About</a>
          <a href="/contact" style={styles.link}>Contact</a>
          <a href="https://www.instagram.com/" style={styles.socialIcon}><FaInstagram /> abc</a>
          <a href="https://twitter.com/" style={styles.socialIcon}><FaTwitter />abc</a>
          <a href="https://www.facebook.com/" style={styles.socialIcon}><FaFacebook />abc</a>
          <a href="/contact" style={styles.link}>Contact : 12345</a>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#081730',
    color: '#fff',
    padding: '20px 0',
    textAlign: 'center',
    height: '300px',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  links: {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  link: {
    color: '#fff',
    margin: '0 20px',
    textDecoration: 'none',
  },
  socialIcon: {
    color: '#fff',
    margin: '0 10px',
    fontSize: '1.5rem',
    textDecoration: 'none',
  },
};

export default Footer;
