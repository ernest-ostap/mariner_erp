import React from 'react'
import SideMenu from '../sidemenu/SideMenu'
import './MainSite.css';
import TopBar from '../topbar/TopBar';

const MainSite = () => {
  return (
    <div className='main-site'>
      <div className='side-menu'>
        <SideMenu /> 
      </div>
      <div className='top-bar'>
        <TopBar />
      </div>
      <div className='content'>
        <h1>Strona główna </h1>
        <p>Witaj na stronie głównej!</p>
      </div>
    </div>
  )
}

export default MainSite