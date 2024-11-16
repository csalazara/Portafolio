import React from 'react';
import { Container, Navbar, Nav} from 'react-bootstrap';
import ProfileCard from './components/profileCard/ProfileCard';
import Experience from './components/experience/Experience';
import './App.css';

function App() {
  return (
    <Container fluid>
      <Navbar bg="white" variant="light" expand="lg">
        <Container fluid>
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

      <Container fluid className='d-flex flex-column justify-content-center align-items-center'>
        <div className='profileCard'>
          <div>
            <ProfileCard />
          </div>
        </div>

        <div>
          <button class="button-transform" style={{ textTransform: 'uppercase' }}>download resume</button>
        </div>
      </Container>

      <Experience></Experience>

    </Container>
  );
}

export default App;
