import React from 'react';
import { Tabs, Tab, Table, Card } from 'react-bootstrap';

const KupnoSprzedaz = () => {
  const materials = [
    { id: 1, name: 'Żelkot', quantity: '200 kg', price: '5000 PLN' },
    { id: 2, name: 'Topkot', quantity: '150 kg', price: '4000 PLN' },
    { id: 3, name: 'Żywica', quantity: '300 kg', price: '7000 PLN' },
    { id: 4, name: 'Włókno szklane', quantity: '500 kg', price: '10000 PLN' },
  ];

  const boats = [
    { id: 1, name: 'Stillo 30', type: 'Houseboat', productionNumber: 'HB-2024-001', priceNet: '370 000 PLN', priceGross: '455 100 PLN' },
    { id: 2, name: 'Stillo 30.1', type: 'Houseboat', productionNumber: 'HB-2024-002', priceNet: '410 000 PLN', priceGross: '504 300 PLN' },
    { id: 3, name: 'Antila 26.2', type: 'Jacht żaglowy', productionNumber: 'JY-2024-003', priceNet: '120 000 PLN', priceGross: '147 600 PLN' },
  ];

  return (
    <div className="kupno-sprzedaz">
      <Card>
        <Card.Body>
          <Card.Title>Kupno i Sprzedaż</Card.Title>
          <Tabs defaultActiveKey="materials" id="kupno-sprzedaz-tabs">
            <Tab eventKey="materials" title="Materiały">
              <Table striped bordered hover className="mt-3">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Nazwa</th>
                    <th>Ilość</th>
                    <th>Cena</th>
                  </tr>
                </thead>
                <tbody>
                  {materials.map((material, index) => (
                    <tr key={material.id}>
                      <td>{index + 1}</td>
                      <td>{material.name}</td>
                      <td>{material.quantity}</td>
                      <td>{material.price}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Tab>
            <Tab eventKey="boats" title="Wyprodukowane Jednostki">
              <Table striped bordered hover className="mt-3">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nazwa Jednostki</th>
                    <th>Rodzaj</th>
                    <th>Nr Produkcyjny</th>
                    <th>Cena Netto</th>
                    <th>Cena Brutto</th>
                  </tr>
                </thead>
                <tbody>
                  {boats.map((boat) => (
                    <tr key={boat.id}>
                      <td>{boat.id}</td>
                      <td>{boat.name}</td>
                      <td>{boat.type}</td>
                      <td>{boat.productionNumber}</td>
                      <td>{boat.priceNet}</td>
                      <td>{boat.priceGross}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Tab>
          </Tabs>
        </Card.Body>
      </Card>
    </div>
  );
};

export default KupnoSprzedaz;
