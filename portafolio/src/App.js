import React from 'react';
import { Container, Navbar, Nav, Image, Button, Row, Col } from 'react-bootstrap';
import ProfileCard from './components/profileCard/ProfileCard';
import './App.css';

function App() {
  return (
    <div>
      <Navbar bg="white" variant="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src='Logo.png' alt="Logo" style={{height:'50px'}} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="text-dark nav-link" href="#about">About</Nav.Link>
              <Nav.Link className="text-dark nav-link" href="#skills">Skills</Nav.Link>
              <Nav.Link className="text-dark nav-link" href="#portfolio">Portfolio</Nav.Link>
              <Nav.Link className="text-dark nav-link" href="#experience">Experience</Nav.Link>
              <Nav.Link className="text-dark nav-link" href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className='d-flex justify-content-center align-items-center'>
        <div className='profileCard'>
          <div>
            <ProfileCard />
          </div>
        </div>
      </Container>

    </div>
  );
}

export default App;
