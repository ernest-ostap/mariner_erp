import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import KadraPracownicza from '../KadraPracownicza';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const UsunUrlop = ({urlopy}) => {
    const [show, setShow] = useState(false);
    const dodajClose = () => setShow(false);
    const dodajOpen = () => setShow(true);
  return (
    <>
            <Button variant="danger" onClick={dodajOpen}>
                Skasuj urlop
            </Button>
        
            <Modal show={show} 
            onHide={dodajClose} 
            aria-labelledby="contained-modal-title-vcenter"
            centered
            size='xl'
            backdrop="static"
            >
                <Modal.Header closeButton>
                <Modal.Title>Usuń istniejący urlop</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <DropdownButton id="dropdown-item-button" title="Wybierz pracownika">
                        <Dropdown.ItemText>Wybierz urlop</Dropdown.ItemText>
                        {urlopy.map(urlopy => (
                            <div key={urlopy.id}>
                                <Dropdown.Item>
                                    {urlopy.id}. {urlopy.employeeId} {urlopy.firstName} {urlopy.lastName}: od {urlopy.startDate} do {urlopy.endDate}
                                </Dropdown.Item>  
                            </div>
                        ))}
                    </DropdownButton>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="danger" onClick={dodajClose}>
                    Anuluj
                </Button>
                <Button variant="warning" onClick={dodajClose}>
                    Usuń urlop
                </Button>
                </Modal.Footer>
            </Modal>
        </>
  )
}

export default UsunUrlop