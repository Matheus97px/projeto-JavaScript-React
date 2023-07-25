import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function HeaderPartial() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Estamp'Art Boutique</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className='nav-link' to={"/"}>Produtos</Link>
          </Nav>
          <Link to={'carrinho'}>
            <Button variant='outline-primary'>Carrinho</Button>
            </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderPartial;