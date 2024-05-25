import React from 'react';
import { Line } from 'react-chartjs-2';
import { Card } from 'react-bootstrap';

const Analizy = () => {
  const data = {
    labels: ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec'],
    datasets: [
      {
        label: 'Przychody',
        data: [12000, 19000, 3000, 5000, 20000, 30000, 45000],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
      {
        label: 'Koszty',
        data: [10000, 15000, 2000, 4000, 10000, 25000, 40000],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
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
  };

  return (
    <div className="analizy">
      <Card className="mb-3">
        <Card.Body>
          <Card.Title>Analiza Przychodów i Kosztów</Card.Title>
          <Line data={data} options={options} />
        </Card.Body>
      </Card>

      <Card className="mb-3">
        <Card.Body>
          <Card.Title>Prognoza Finansowa</Card.Title>
          {/* Można dodać wykres lub inne dane dotyczące prognoz finansowych */}
          <p>Prognozy finansowe na nadchodzące miesiące...</p>
        </Card.Body>
      </Card>

      <Card className="mb-3">
        <Card.Body>
          <Card.Title>Analiza Trendów</Card.Title>
          {/* Można dodać dodatkowe wykresy lub analizy trendów */}
          <p>Analiza trendów w przychodach i kosztach...</p>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Analizy;
