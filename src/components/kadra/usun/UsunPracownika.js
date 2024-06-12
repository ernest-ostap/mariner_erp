import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import KadraPracownicza from '../KadraPracownicza';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const UsunPracownika = ({employees}) => {

    const [show, setShow] = useState(false);
    const dodajClose = () => setShow(false);
    const dodajOpen = () => setShow(true);
    
    return (
        <>
            <Button variant="danger" onClick={dodajOpen}>
                Skasuj pracownika
            </Button>
        
            <Modal show={show} 
            onHide={dodajClose} 
            aria-labelledby="contained-modal-title-vcenter"
            centered
            size='xl'
            backdrop="static"
            >
                <Modal.Header closeButton>
                <Modal.Title>Edycja danych pracownika</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <DropdownButton id="dropdown-item-button" title="Wybierz pracownika">
                        <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
                        {employees.map(employee => (
                            <div key={employee.id}>
                                <Dropdown.Item >{employee.id}. {employee.firstName} {employee.lastName}</Dropdown.Item>  
                            </div>
                        ))}
                    </DropdownButton>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="danger" onClick={dodajClose}>
                    Anuluj
                </Button>
                <Button variant="warning" onClick={dodajClose}>
                    Usuń pracownika
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default UsunPracownika