import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './KadraPracownicza.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


const KadraPracownicza = () => {

    const employees = [
        { id: 1, firstName: 'Jan', lastName: 'Kowalski', position: 'Manager', experience: '5 lat', contactNumber: '123-456-789', residence: 'Warszawa', pay: '9000 PLN', accountNumber: '12345678901234567890', taxOffice: 'Warszawa' },
        { id: 2, firstName: 'Anna', lastName: 'Nowak', position: 'Kierownik zmiany', experience: '3 lata', contactNumber: '234-567-890', residence: 'Kraków', pay: '6500 PLN', accountNumber: '23456789012345678901', taxOffice: 'Kraków' },
        { id: 3, firstName: 'Piotr', lastName: 'Wiśniewski', position: 'Szkutnik', experience: '7 lat', contactNumber: '345-678-901', residence: 'Łódź', pay: '5500 PLN', accountNumber: '34567890123456789012', taxOffice: 'Łódź' },
        { id: 4, firstName: 'Katarzyna', lastName: 'Wójcik', position: 'Szkutnik', experience: '1 rok', contactNumber: '456-789-012', residence: 'Wrocław', pay: '5000 PLN', accountNumber: '45678901234567890123', taxOffice: 'Wrocław' },
        { id: 5, firstName: 'Tomasz', lastName: 'Kowalczyk', position: 'Szkutnik', experience: '10 lat', contactNumber: '567-890-123', residence: 'Poznań', pay: '5000 PLN', accountNumber: '56789012345678901234', taxOffice: 'Poznań' },
        { id: 6, firstName: 'Magdalena', lastName: 'Kamińska', position: 'Szkutnik', experience: '4 lata', contactNumber: '678-901-234', residence: 'Gdańsk', pay: '5000 PLN', accountNumber: '67890123456789012345', taxOffice: 'Gdańsk' },
        { id: 7, firstName: 'Marcin', lastName: 'Lewandowski', position: 'Hydraulik', experience: '2 lata', contactNumber: '789-012-345', residence: 'Szczecin', pay: '6000 PLN', accountNumber: '78901234567890123456', taxOffice: 'Szczecin' },
        { id: 8, firstName: 'Agata', lastName: 'Zielińska', position: 'Sprzątaczka', experience: '6 lat', contactNumber: '890-123-456', residence: 'Bydgoszcz', pay: '4500 PLN', accountNumber: '89012345678901234567', taxOffice: 'Bydgoszcz' },
        { id: 9, firstName: 'Paweł', lastName: 'Szymański', position: 'Szklarz', experience: '8 lat', contactNumber: '901-234-567', residence: 'Lublin', pay: '6000 PLN', accountNumber: '90123456789012345678', taxOffice: 'Lublin' },
        { id: 10, firstName: 'Michał', lastName: 'Woźniak', position: 'Mechanik', experience: '9 lat', contactNumber: '012-345-678', residence: 'Katowice', pay: '6000 PLN', accountNumber: '01234567890123456789', taxOffice: 'Katowice' }
      ];

      const urlopy = [
        { id: 1, employeeId: 1, firstName: 'Jan', lastName: 'Kowalski', startDate: '2024-06-01', endDate: '2024-06-10' },
        { id: 2, employeeId: 2, firstName: 'Anna', lastName: 'Nowak', startDate: '2024-07-15', endDate: '2024-07-25' },
        { id: 3, employeeId: 3, firstName: 'Piotr', lastName: 'Wiśniewski', startDate: '2024-08-05', endDate: '2024-08-15' },
        { id: 4, employeeId: 4, firstName: 'Katarzyna', lastName: 'Wójcik', startDate: '2024-09-10', endDate: '2024-09-20' },
        { id: 5, employeeId: 5, firstName: 'Tomasz', lastName: 'Kowalczyk', startDate: '2024-10-01', endDate: '2024-10-10' }
      ];

  return (
    <div>
        <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3">
            <Tab eventKey="Home" title="Lista Pracowników" >
                <Button variant="success" className="button-kadra">Dodaj pracownika</Button>{' '}
                <Button variant="info" className="button-kadra">Edytuj dane pracownika</Button>{' '}
                <Button variant="danger" className="button-kadra">Skasuj pracownika</Button>{' '}
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Imię</th>
                            <th>Nazwisko</th>
                            <th>Stanowisko</th>
                            <th>Staż pracy</th>
                            <th>Numer konta</th>
                            <th>Urząd skarbowy</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map(employee => (
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.position}</td>
                                <td>{employee.experience}</td>
                                <td>{employee.contactNumber}</td>
                                <td>{employee.residence}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Tab>
            <Tab eventKey="profile1" title="Płace">
                <Button variant="info" className="button-kadra">Zmień płacę</Button>{' '}
                <Button variant="danger" className="button-kadra">Skasuj pracownika</Button>{' '}
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Imię</th>
                            <th>Nazwisko</th>
                            <th>Stanowisko</th>
                            <th>Płaca</th>
                            <th>Numer konta</th>
                            <th>Urząd skarbowy</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map(employee => (
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.position}</td>
                                <td>{employee.pay}</td>
                                <td>{employee.accountNumber}</td>
                                <td>{employee.taxOffice}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Tab>
            <Tab eventKey="profile2" title="Urlopy">
                <Button variant="info" className="button-kadra">Wyświetl zapytania o urlopy</Button>{' '}
                <Button variant="danger" className="button-kadra">Skasuj urlop</Button>{' '}
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Id Pracownika</th>
                            <th>Imię</th>
                            <th>Nazwisko</th>
                            <th>Data rozpoczęcia</th>
                            <th>Data zakończenia</th>
                        </tr>
                    </thead>
                    <tbody>
                        {urlopy.map(urlop => (
                            <tr key={urlop.id}>
                                <td>{urlop.id}</td>
                                <td>{urlop.employeeId}</td>
                                <td>{urlop.firstName}</td>
                                <td>{urlop.lastName}</td>
                                <td>{urlop.startDate}</td>
                                <td>{urlop.endDate}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Tab>
        </Tabs>
    </div>
  )
}

export default KadraPracownicza