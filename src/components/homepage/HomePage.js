import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './HomePage.css';
import 'chart.js/auto';
import { Line } from 'react-chartjs-2';


const HomePage = () => {

    const data = {
      labels: ['2019', '2020', '2021', '2022', '2023'],
      datasets: [
        {
          label: 'Ilość zamówień',
          data: [10, 25, 20, 25, 35], // Przykładowe dane
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          fill: true,
        },
      ],
    };
  
    const options = {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
      responsive: true,
      maintainAspectRatio: false,
    };

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
              Produkcja 
            </Button>{' '}
            <Button variant="outline-info" size="" className="button1">
              Projekty jednostek
            </Button>{' '}
          </div>
        </Card.Body>
      </Card>
      <Card style={{ width: '30rem', height: '18rem'}}>
        <Card.Body>
          <Card.Title>Kończące się materiały</Card.Title>
          <Card.Text className="card-text">
            <div className="material-dashboard">
              Żelkot: 5 kg
            </div>
            <div className="material-dashboard">
              Żywica: 2 kg
            </div>
            <div className="material-dashboard">
              Włókno szklane: 10 kg 
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
          <Card.Title>Ilość zamówień przez ostatnie lata</Card.Title>
          <Card.Text>
            <div style={{ height: '150px' }}>
              <Line data={data} options={options} />
            </div>
          </Card.Text>
          <div className="buttons">
            <Button variant="outline-info" size="" className="button1">
              Więcej analiz
            </Button>{' '}
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default HomePage