import React from 'react';
import './TopBar.css';
import Logo from "../img/mariner-logo.jpg";

const TopBar = () => {
  return (
    <div className="top-bar2">
      <div className="logo">
        <img src={Logo} alt="Logo strony" />
      </div>
      <div className="title">
        <p>MARINER ERP</p>
      </div>
      <div className="current-user">
        <p className="user-data">Witaj</p>
        <p className="user-data">Jan Kowalski</p>
      </div>
    </div>
  )
}

export default TopBar