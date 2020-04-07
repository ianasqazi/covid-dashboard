import React from 'react';

import '../App.css';
// import googleFont from "https://fonts.googleapis.com/css?family=Baloo+Thambi+2&display=swap";

function Footer() {
  return (
    <>
      <div style={footerStyle}>
        <p>Made with ♡ <a href="https://ianasqazi.ca" target="_blank">Anas Qazi</a></p>
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
  // textShadow: '2px 2px black',
}

export default Footer;
