import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <Card style={{ width: '30rem', height: '18rem'}}>
        <Card.Body>
          <Card.Title>Dzisiejszy grafik <i class="fa-solid fa-user-group icon-class"></i></Card.Title>
          <Card.Text>
            <div className="info-grafik">
              Osoby dzisiaj na hali produkcyjnej: 13
            </div>
            <div className="info-grafik">
              Osoby dzisiaj na zwolnieniu lekarskim: 3
            </div>
            <div className="info-grafik">
              Osoby dzisiaj na urlopie: 2
            </div>
          </Card.Text>
          <div className="buttons">
            <Button variant="outline-info" size="" className="button1">
              Kadra Pracownicza
            </Button>{' '}
            <Button variant="outline-info" size="" className="button1">
              Pełny grafik
            </Button>{' '}
          </div>
        </Card.Body>
      </Card>
      <Card style={{ width: '30rem', height: '18rem'}}>
        <Card.Body>
          <Card.Title>Obecne jednostki w produkcji</Card.Title>
          <Card.Text>
            <div className="unit">
              <i class="fa-solid fa-sailboat"></i>   Antila 28.2 
            </div>
            <div className="unit">
              <i class="fa-solid fa-sailboat"></i>   Antila 30.1 
            </div>
            <div className="unit">
            <i class="fa-solid fa-ship"></i>   Stillo 30
            </div>
          </Card.Text>
          <div className="buttons">
            <Button variant="outline-info" size="" className="button1">
              Kadra Pracownicza
            </Button>{' '}
            <Button variant="outline-info" size="" className="button1">
              Pełny grafik
            </Button>{' '}
          </div>
        </Card.Body>
      </Card>
      <Card style={{ width: '30rem', height: '18rem'}}>
        <Card.Body>
          <Card.Title>Kończące się materiały</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <div className="buttons">
            <Button variant="outline-info" size="" className="button1">
              Kadra Pracownicza
            </Button>{' '}
            <Button variant="outline-info" size="" className="button1">
              Pełny grafik
            </Button>{' '}
          </div>
        </Card.Body>
      </Card>
      <Card style={{ width: '30rem', height: '18rem'}}>
        <Card.Body>
          <Card.Title>Ilość zamówień przez ostatnie lata</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    </div>
  )
}

export default HomePage