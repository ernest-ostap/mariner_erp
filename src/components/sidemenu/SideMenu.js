import React from 'react'
import './SideMenu.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SideMenu = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>Strona główna</Col>
        </Row>
        <Row>
          <Col>Kadra pracownicza</Col>
        </Row>
        <Row>
          <Col>Finanse i księgowość</Col>
        </Row>
        <Row>
          <Col>Analizy</Col>
        </Row>
        <Row>
          <Col>Sprzedaż i zakup</Col>
        </Row>
        <Row>
          <Col>Produkcja</Col>
        </Row>
        <Row>
          <Col>Magazyn</Col>
        </Row>
      </Container>
    </div>
  )
}

export default SideMenu
