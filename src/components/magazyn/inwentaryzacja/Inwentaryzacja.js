import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { Table } from 'react-bootstrap';
const Inwentaryzacja = ({materials}) => {

    const [show, setShow] = useState(false);
    const dodajClose = () => setShow(false);
    const dodajOpen = () => setShow(true);
    return (
        <>
            <Button variant="success" onClick={dodajOpen}>
                Inwentaryzacja 
            </Button>
        
            <Modal show={show} 
            onHide={dodajClose} 
            aria-labelledby="contained-modal-title-vcenter"
            centered
            size='xl'
            backdrop="static"
            >
                <Modal.Header closeButton>
                <Modal.Title>Inwentaryzacja magazynu</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Table striped bordered hover className="mt-3">
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nazwa Materiału</th>
                                <th>Lokalizacja</th>
                                <th>Obecna ilość sztuk</th>
                                <th>Operacja</th>
                            </tr>
                            </thead>
                            <tbody>
                            {materials.map((material) => (
                                <tr key={material.id}>
                                    <td>{material.id}</td>
                                    <td>{material.name}</td>
                                    <td>{material.location}</td>
                                    <td>
                                    <Form.Group className="mb-3" controlId="fromBasicNumber">
                                        <Form.Control type="number" placeholder="Wpisz obecną ilość w magazynie" />
                                    </Form.Group>
                                    </td>
                                    <td>
                                        <Button variant='success'>Zatwierdź</Button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </Table>
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

export default Inwentaryzacja