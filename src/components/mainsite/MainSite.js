import React, { useState } from 'react';
import SideMenu from '../sidemenu/SideMenu';
import './MainSite.css';
import TopBar from '../topbar/TopBar';
import HomePage from '../homepage/HomePage';
import KadraPracownicza from '../kadra/KadraPracownicza'; // Importuj inne komponenty w zależności od zawartości
import FinanseKsiegowosc from '../finanse/FinanseKsiegowosc';
import Analizy from '../analizy/Analizy';
import KupnoSprzedaz from '../kupno/KupnoSprzedaz';
import Produkcja from '../produkcja/Produkcja';
import Magazyn from '../magazyn/Magazyn';

const MainSite = () => {
  const [content, setContent] = useState('home');

  const renderContent = () => {
    switch (content) {
      case 'home':
        return <HomePage />;
      case 'kadra':
        return <KadraPracownicza />;
      case 'finanse':
        return <FinanseKsiegowosc />;
      case 'analizy':
        return <Analizy />;
      case 'kupno':
        return <KupnoSprzedaz />;
      case 'produkcja':
        return <Produkcja />;
      case 'magazyn':
        return <Magazyn />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className='main-site'>
      <div className='side-menu'>
        <SideMenu setContent={setContent} /> 
      </div>
      <div className='top-bar'>
        <TopBar />
      </div>
      <div className='content'>
        {renderContent()}
      </div>
    </div>
  );
}

export default MainSite;
