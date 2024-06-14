import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const DodajTransakcje = () => {

    const [show, setShow] = useState(false);
    const dodajClose = () => setShow(false);
    const dodajOpen = () => setShow(true);
    return (
        <>
            <Button variant="success" onClick={dodajOpen}>
                Dodaj transakcje
            </Button>
        
            <Modal show={show} 
            onHide={dodajClose} 
            aria-labelledby="contained-modal-title-vcenter"
            centered
            size='xl'
            backdrop="static"
            >
                <Modal.Header closeButton>
                <Modal.Title>Dodawanie transakcji</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="fromBasicText">
                            <Form.Label>Data</Form.Label>
                            <Form.Control type="date" placeholder="Wpisz Datę" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="fromBasicText">
                            <Form.Label>Opis</Form.Label>
                            <Form.Control type="text" placeholder="Wpisz Opis" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="fromBasicNumber">
                            <Form.Label>Kwota</Form.Label>
                            <Form.Control type="number" placeholder="Wpisz Kwotę" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={dodajClose}>
                        Anuluj
                    </Button>
                    <Button variant="primary" onClick={dodajClose}>
                        Zatwiedź
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
    }

export default DodajTransakcje