import React from 'react'
import SideMenu from '../sidemenu/SideMenu'
import './MainSite.css';
import TopBar from '../topbar/TopBar';
import HomePage from '../homepage/HomePage';

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
        <HomePage />
        
      </div>
    </div>
  )
}

export default MainSite