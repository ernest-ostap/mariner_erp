import React from 'react';
import { Button, Card, Table, button } from 'react-bootstrap';
import './Magazyn.css';
import Inwentaryzacja from './inwentaryzacja/Inwentaryzacja';
import OstatniaDostawa from './dostawa/OstatniaDostawa';

const Magazyn = () => {
  const materials = [
    { id: 1, name: 'Żelkot', quantity: '500 kg', location: 'Magazyn A' },
    { id: 2, name: 'Topkot', quantity: '300 kg', location: 'Magazyn A' },
    { id: 3, name: 'Żywica', quantity: '1000 kg', location: 'Magazyn C' },
    { id: 4, name: 'Włókno szklane', quantity: '200 rolek', location: 'Magazyn D' },
    { id: 5, name: 'Papier Ścierny 120', quantity: '50 rolek', location: 'Magazyn D' },
    { id: 6, name: 'Płyta drewniana wiórowa', quantity: '130 sztuk', location: 'Magazyn B' },
    { id: 7, name: 'Blat kuchenny', quantity: '25 sztuk', location: 'Magazyn B' },
  ];

  const stockMovements = [
    { id: 1, date: '2024-05-20', material: 'Żelkot', quantity: '-50 kg', type: 'Wydanie' },
    { id: 2, date: '2024-05-22', material: 'Topkot', quantity: '+100 kg', type: 'Przyjęcie' },
    { id: 3, date: '2024-05-23', material: 'Żywica', quantity: '-200 kg', type: 'Wydanie' },
    { id: 4, date: '2024-05-24', material: 'Włókno szklane', quantity: '+50 rolek', type: 'Przyjęcie' },
  ];

  return (
    <div className="magazyn">
      <div className="magazyn-buttons">
        <div className="magazyn-button">
          <Inwentaryzacja materials={materials} />
        </div>
        <div className="magazyn-button">
          <OstatniaDostawa />
        </div>
      </div>
      <Card className="mb-4">
        <Card.Body>
          <Card.Title>Magazyn - Stany Magazynowe</Card.Title>
          <Table striped bordered hover className="mt-3">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nazwa Materiału</th>
                <th>Ilość</th>
                <th>Lokalizacja</th>
              </tr>
            </thead>
            <tbody>
              {materials.map((material) => (
                <tr key={material.id}>
                  <td>{material.id}</td>
                  <td>{material.name}</td>
                  <td>{material.quantity}</td>
                  <td>{material.location}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      <Card>
        <Card.Body>
          <Card.Title>Magazyn - Historia Ruchów Magazynowych</Card.Title>
          <Table striped bordered hover className="mt-3">
            <thead>
              <tr>
                <th>ID</th>
                <th>Data</th>
                <th>Materiał</th>
                <th>Ilość</th>
                <th>Rodzaj Ruchu</th>
              </tr>
            </thead>
            <tbody>
              {stockMovements.map((movement) => (
                <tr key={movement.id}>
                  <td>{movement.id}</td>
                  <td>{movement.date}</td>
                  <td>{movement.material}</td>
                  <td>{movement.quantity}</td>
                  <td>{movement.type}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Magazyn;
