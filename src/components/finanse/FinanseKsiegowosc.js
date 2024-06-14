import React from 'react';
import { Table, Card, Button } from 'react-bootstrap';
import DodajTransakcje from './dodaj/DodajTransakcje';

const FinanseKsiegowosc = () => {
  const transactions = [
    { id: 1, date: '2024-01-01', description: 'Sprzedaż jendostek', amount: 435000 },
    { id: 2, date: '2024-01-02', description: 'Zakup materiałów', amount: -200000 },
    { id: 3, date: '2024-01-03', description: 'Usługi marketingowe', amount: -1500 },
    { id: 4, date: '2024-01-04', description: 'Sprzedaż usług', amount: 3000 },
  ];

  const totalIncome = transactions.filter(t => t.amount > 0).reduce((acc, curr) => acc + curr.amount, 0);
  const totalExpenses = transactions.filter(t => t.amount < 0).reduce((acc, curr) => acc + curr.amount, 0);
  const totalProfit = totalIncome + totalExpenses;

  return (
    <div className="finanse-ksiegowosc">
      <Card className="m-3">
        <Card.Body>
          <Card.Title>Podsumowanie Finansowe</Card.Title>
          <Card.Text>
            <strong>Całkowite Przychody:</strong> {totalIncome} PLN<br />
            <strong>Całkowite Koszty:</strong> {totalExpenses} PLN<br />
            <strong>Zysk:</strong> {totalProfit} PLN
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="m-3">
        <Card.Body>
          <Card.Title>Ostatnie Transakcje</Card.Title>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Data</th>
                <th>Opis</th>
                <th>Kwota</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, index) => (
                <tr key={transaction.id}>
                  <td>{index + 1}</td>
                  <td>{transaction.date}</td>
                  <td>{transaction.description}</td>
                  <td>{transaction.amount} PLN</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <DodajTransakcje />
        </Card.Body>
      </Card>
    </div>
  );
};

export default FinanseKsiegowosc;
