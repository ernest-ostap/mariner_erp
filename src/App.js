import './App.css';
import React from 'react';
import MainSite from './components/mainsite/MainSite';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Mariner ERP</title>
      </Helmet>
      <MainSite />
      
    </div>
  );
}

export default App;
