import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import KadraPracownicza from '../KadraPracownicza';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const ZmianaPlacy = ({employees}) => {
    const [show, setShow] = useState(false);
    const dodajClose = () => setShow(false);
    const dodajOpen = () => setShow(true);
  return (
    <>
            <Button variant="info" onClick={dodajOpen}>
                Zmień dane wypłaty
            </Button>
        
            <Modal show={show} 
            onHide={dodajClose} 
            aria-labelledby="contained-modal-title-vcenter"
            centered
            size='xl'
            backdrop="static"
            >
                <Modal.Header closeButton>
                <Modal.Title>Edycja danych dotyczących płacy</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <DropdownButton id="dropdown-item-button" title="Wybierz pracownika">
                        <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
                        {employees.map(employee => (
                            <div key={employee.id}>
                                <Dropdown.Item >{employee.id}. {employee.firstName} {employee.lastName}</Dropdown.Item>  
                            </div>
                        ))}
                        </DropdownButton>
                        <Form.Group className="mb-3" controlId="fromBasicText">
                            <Form.Label>Płaca</Form.Label>
                            <Form.Control type="text" placeholder="Wpisz nową płacę" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="fromBasicText">
                            <Form.Label>Nr konta bankowego</Form.Label>
                            <Form.Control type="text" placeholder="Wpisz nową płacę" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="fromBasicText">
                            <Form.Label>Urząd skarbowy</Form.Label>
                            <Form.Control type="text" placeholder="Wpisz nową płacę" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="danger" onClick={dodajClose}>
                    Anuluj
                </Button>
                <Button variant="primary" onClick={dodajClose}>
                    Zmień dane
                </Button>
                </Modal.Footer>
            </Modal>
        </>
  )
}

export default ZmianaPlacy