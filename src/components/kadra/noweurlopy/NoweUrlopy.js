import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import KadraPracownicza from '../KadraPracownicza';
import Dropdown from 'react-bootstrap/Dropdown';
import './NoweUrlopy.css';

const NoweUrlopy = ({urlopy}) => {
    const [show, setShow] = useState(false);
    const dodajClose = () => setShow(false);
    const dodajOpen = () => setShow(true);
    return (
        <>
            <Button variant="info" onClick={dodajOpen}>
                Pokaż oczekujące urlopy
            </Button>
        
            <Modal show={show} 
            onHide={dodajClose} 
            aria-labelledby="contained-modal-title-vcenter"
            centered
            size='xl'
            backdrop="static"
            >
                <Modal.Header closeButton>
                <Modal.Title>Zapytania o urlopy</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Id Pracownika</th>
                                <th>Imię</th>
                                <th>Nazwisko</th>
                                <th>Data rozpoczęcia</th>
                                <th>Data zakończenia</th>
                                <th>Akcje</th>
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
                                    <td className='urlopy-akcje'>
                                        <div className='urlopy-akcje-button'><
                                            Button variant="success" >Zaakceptuj</Button>
                                        </div>
                                        <div className='urlopy-akcje-button'>
                                            <Button variant="danger" className='urlopy-akcje-button'>Odrzuć</Button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Modal.Body>
                <Modal.Footer>
                
                <Button variant="primary" onClick={dodajClose}>
                    Zamknij
                </Button>
                </Modal.Footer>
            </Modal>
        </>
  )
}

export default NoweUrlopy