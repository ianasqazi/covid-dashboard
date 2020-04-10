import React from 'react';

import '../App.css';

function Footer() {
  return (
    <>
      <div style={footerStyle}>
        <p>Made with ♡ <a href="https://ianasqazi.ca" rel='noopener noreferrer' target="_blank">Anas Qazi</a></p>
      </div>
    </>
  )
}

const footerStyle = {
  fontFamily: 'Arial',
  textDecoration: 'none',
  width: '100%',
  background: '#212529',
  color: 'white',
  padding:'10px',
  textAlign: 'right',
  bottom: '0px',
}

export default Footer;
