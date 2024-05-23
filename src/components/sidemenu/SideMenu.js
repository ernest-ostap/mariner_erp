import React from 'react';
import './SideMenu.css';
import Button from 'react-bootstrap/Button';

const SideMenu = ({ setContent }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Button variant="outline-info" size="lg" className="button" onClick={() => setContent('home')}>
            <i className="fa-solid fa-house icon-class"></i>Strona główna
          </Button>{' '}
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Button variant="outline-info" size="lg" className="button" onClick={() => setContent('kadra')}>
            <i className="fa-solid fa-user-group icon-class"></i>Kadra Pracownicza
          </Button>{' '}
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Button variant="outline-info" size="lg" className="button" onClick={() => setContent('finanse')}>
            <i className="fa-solid fa-wallet icon-class"></i>Finanse i księgowość
          </Button>{' '}
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Button variant="outline-info" size="lg" className="button" onClick={() => setContent('analizy')}>
            <i className="fa-solid fa-chart-simple icon-class"></i>Analizy
          </Button>{' '}
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Button variant="outline-info" size="lg" className="button" onClick={() => setContent('kupno')}>
            <i className="fa-solid fa-money-bill-transfer icon-class"></i>Kupno i sprzedaż
          </Button>{' '}
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Button variant="outline-info" size="lg" className="button" onClick={() => setContent('produkcja')}>
            <i className="fa-solid fa-industry icon-class"></i>Produkcja
          </Button>{' '}
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Button variant="outline-info" size="lg" className="button" onClick={() => setContent('magazyn')}>
            <i className="fa-solid fa-warehouse icon-class"></i>Magazyn
          </Button>{' '}
        </div>
      </div>
    </div>
  );
}

export default SideMenu;
