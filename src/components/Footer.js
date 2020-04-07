import React from 'react';

function Footer() {
  return (
    <div style={footerStyle}>
      <h6>Made with 🖤 Anas Qazi</h6>
      <a href="https://github.com/ianasqazi/covid-dashboard">Github Repo</a>


    </div>
  )
}

const footerStyle = {
  height: '60px',
  width: '100%',
  background: '#333',
  color: '#fff',
  padding:'10px',
  textAlign: 'center',
  bottom: '0px',
  textShadow: '2px 2px black',
}

export default Footer;
