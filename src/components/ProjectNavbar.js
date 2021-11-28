import React, { Component } from 'react'
import { Navbar, Container, Row } from 'react-bootstrap';
export default class ProjectNavbar extends Component {
  render() {
    return (
      <Row>
        <Navbar bg="light">
          <Container>
            <Navbar.Brand href="#home">Mevduat Faizi Hesaplama</Navbar.Brand>
          </Container>
        </Navbar>
      </Row>
    )
  }
}
