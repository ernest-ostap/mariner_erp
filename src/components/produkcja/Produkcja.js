import React from 'react';
import { Card, Table, ProgressBar } from 'react-bootstrap';
import './Produkcja.css';

const Produkcja = () => {
  const productionUnits = [
    {
      id: 1,
      name: 'Antila 30.1',
      type: 'Jacht żaglowy',
      productionNumber: 'JY-2024-003',
      progress: 70,
      stage: 'Montaż elektryki',
    },
    {
      id: 2,
      name: 'Stillo 30.1',
      type: 'Houseboat',
      productionNumber: 'HB-2024-005',
      progress: 50,
      stage: 'Montaż wnętrz',
    },
    {
      id: 3,
      name: 'Neptune',
      type: 'Jacht żaglowy',
      productionNumber: 'JY-2024-006',
      progress: 30,
      stage: 'Laminowanie kadłuba',
    },
  ];

  const plannedUnits = [
    {
      id: 4,
      name: 'Aurora',
      type: 'Jacht żaglowy',
      plannedStartDate: '2024-06-01',
    },
    {
      id: 5,
      name: 'Atlantis',
      type: 'Houseboat',
      plannedStartDate: '2024-07-15',
    },
    {
      id: 6,
      name: 'Odyssey',
      type: 'Jacht żaglowy',
      plannedStartDate: '2024-09-01',
    },
  ];

  const hullConstruction = [
    {
      id: 1,
      name: 'Orion',
      type: 'Jacht żaglowy',
      stage: 'Formowanie kadłuba',
      progress: 80,
    },
    {
      id: 2,
      name: 'Poseidon',
      type: 'Houseboat',
      stage: 'Wzmacnianie kadłuba',
      progress: 60,
    },
    {
      id: 3,
      name: 'Neptune',
      type: 'Jacht żaglowy',
      stage: 'Montaż elementów',
      progress: 40,
    },
  ];

  return (
    <div className="produkcja">
      <Card className='mb-3'>
        <Card.Body>
          <Card.Title>Produkcja Jednostek Pływających</Card.Title>
          <Table striped bordered hover className="mt-3">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nazwa Jednostki</th>
                <th>Rodzaj</th>
                <th>Nr Produkcyjny</th>
                <th>Etap Produkcji</th>
                <th>Postęp</th>
              </tr>
            </thead>
            <tbody>
              {productionUnits.map((unit) => (
                <tr key={unit.id}>
                  <td>{unit.id}</td>
                  <td>{unit.name}</td>
                  <td>{unit.type}</td>
                  <td>{unit.productionNumber}</td>
                  <td>{unit.stage}</td>
                  <td>
                    <ProgressBar now={unit.progress} label={`${unit.progress}%`} />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

            <h5 className="mt-5">Jednostki Planowane do Produkcji</h5>
          <Table striped bordered hover className="mt-3">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nazwa Jednostki</th>
                <th>Rodzaj</th>
                <th>Planowana Data Rozpoczęcia</th>
              </tr>
            </thead>
            <tbody>
              {plannedUnits.map((unit) => (
                <tr key={unit.id}>
                  <td>{unit.id}</td>
                  <td>{unit.name}</td>
                  <td>{unit.type}</td>
                  <td>{unit.plannedStartDate}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      <Card>
        <Card.Body>
          <Card.Title>Budowa Kadłubów</Card.Title>
          <Table striped bordered hover className="mt-3">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nazwa Jednostki</th>
                <th>Rodzaj</th>
                <th>Etap Budowy Kadłuba</th>
                <th>Postęp</th>
              </tr>
            </thead>
            <tbody>
              {hullConstruction.map((unit) => (
                <tr key={unit.id}>
                  <td>{unit.id}</td>
                  <td>{unit.name}</td>
                  <td>{unit.type}</td>
                  <td>{unit.stage}</td>
                  <td>
                    <ProgressBar now={unit.progress} label={`${unit.progress}%`} />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Produkcja;
