import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Nfood.css';


export default function Nfood() {
  return (
   
    <Navbar   expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img  src='./assets/logo.png' alt=''/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home" >Home</Nav.Link>
          <Nav.Link href="#home">About Us</Nav.Link>
          <Nav.Link href="#home" >Explore</Nav.Link>
          <Nav.Link href="#home">Review</Nav.Link>
          <Nav.Link href="#home" >Fag</Nav.Link>
        </Nav>

        <Nav>
          <Nav.Link id='lastnav' >20517647</Nav.Link>
        </Nav>
       
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
  );
}