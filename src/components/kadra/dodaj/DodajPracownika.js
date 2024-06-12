import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './DodajPracownika.css';
import Form from 'react-bootstrap/Form';

const DodajPracownika = () => {

    const [show, setShow] = useState(false);
    const dodajClose = () => setShow(false);
    const dodajOpen = () => setShow(true);
    return (
        <>
            <Button variant="success" onClick={dodajOpen}>
                Dodaj pracownika
            </Button>
        
            <Modal show={show} 
            onHide={dodajClose} 
            aria-labelledby="contained-modal-title-vcenter"
            centered
            size='xl'
            backdrop="static"
            >
            <Modal.Header closeButton>
              <Modal.Title>Dodawanie pracownika</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="fromBasicText">
                        <Form.Label>Imię</Form.Label>
                        <Form.Control type="text" placeholder="Wpisz Imię" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="fromBasicText">
                        <Form.Label>Nazwisko</Form.Label>
                        <Form.Control type="text" placeholder="Wpisz Nazwisko" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="fromBasicText">
                        <Form.Label>Stanowisko</Form.Label>
                        <Form.Control type="text" placeholder="Wpisz Stanowisko" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="fromBasicNumber">
                        <Form.Label>Staż pracy</Form.Label>
                        <Form.Control type="number" placeholder="Wpisz Staż pracy" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="fromBasicText">
                        <Form.Label>Numer konta</Form.Label>
                        <Form.Control type="text" placeholder="Wpisz Numer konta" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="fromBasicText">
                        <Form.Label>Urząd skarbowy</Form.Label>
                        <Form.Control type="text" placeholder="Wpisz Urząd skarbowy" />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={dodajClose}>
                Anuluj
              </Button>
              <Button variant="primary" onClick={dodajClose}>
                Dodaj pracownika
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
    }

export default DodajPracownika