import React from 'react'
import { Button, Card, Table, button, Modal } from 'react-bootstrap';
import { useState } from 'react';

const OstatniaDostawa = () => {
    const materials = [
        { id: 1, name: 'Żelkot', ilosc: '500 kg', dostawca: 'hurtowania HURT' },
        { id: 2, name: 'Żywica', ilosc: '250kg', dostawca: 'hurtowania HURT' },
        { id: 3, name: 'Farba', ilosc: '300 kg', dostawca: 'hurtowania HURT' },
        { id: 4, name: 'Rozcieńczalnik', ilosc: '200 kg', dostawca: 'hurtowania HURT' },
        { id: 5, name: 'Lakier', ilosc: '150 kg', dostawca: 'hurtowania HURT' },
        { id: 6, name: 'Papier ścierny', ilosc: '100 kg', dostawca: 'hurtowania HURT' },
        { id: 7, name: 'Tasma malarska', ilosc: '50 kg', dostawca: 'hurtowania HURT' },
      ];
    const [show, setShow] = useState(false);
    const dodajClose = () => setShow(false);
    const dodajOpen = () => setShow(true);
    return (
        <>
            <Button variant="info" onClick={dodajOpen}>
                Ostatnia dostawa
            </Button>
        
            <Modal show={show} 
            onHide={dodajClose} 
            aria-labelledby="contained-modal-title-vcenter"
            centered
            size='xl'
            backdrop="static"
            >
                <Modal.Header closeButton>
                <Modal.Title>Spis materiałów z ostatniej dostawy</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Table striped bordered hover className="mt-3">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nazwa Materiału</th>
                            <th>Ilość</th>
                            <th>Dostawca</th>
                        </tr>
                        </thead>
                        <tbody>
                        {materials.map((material) => (
                            <tr key={material.id}>
                            <td>{material.id}</td>
                            <td>{material.name}</td>
                            <td>{material.ilosc}</td>
                            <td>{material.dostawca}</td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="danger" onClick={dodajClose}>
                    Anuluj
                </Button>
                <Button variant="success" onClick={dodajClose}>
                    Zatwierdź
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default OstatniaDostawa