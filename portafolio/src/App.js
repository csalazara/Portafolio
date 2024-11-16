import React, { useState, useEffect, useRef } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import ProfileCard from './components/profileCard/ProfileCard';
import Experience from './components/experience/Experience';
import './App.css';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(0); // Estado para almacenar la altura del Navbar
  const [isNavbarOpen, setIsNavbarOpen] = useState(false); // Estado para saber si el navbar está abierto
  const navbarRef = useRef(null); // Referencia al Navbar

  // Detecta el evento de scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Obtiene la altura del Navbar dinámicamente
    const updateNavbarHeight = () => {
      if (navbarRef.current) {
        setNavbarHeight(navbarRef.current.offsetHeight); // Asigna la altura del Navbar
      }
    };

    // Añade el listener de scroll
    window.addEventListener('scroll', handleScroll);

    // Actualiza la altura del Navbar al cargar el componente
    updateNavbarHeight();

    // Escucha cambios de tamaño de la ventana para ajustar la altura si es necesario
    window.addEventListener('resize', updateNavbarHeight);

    // Elimina los listeners cuando el componente se desmonta
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateNavbarHeight);
    };
  }, []);

  // Cambiar el estado cuando el Navbar se despliega o se cierra
  const handleNavbarToggle = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <Container fluid className='p-0'>
      <div>
        {/* Navbar */}
        <Navbar
          ref={navbarRef} // Referencia al Navbar
          bg={isNavbarOpen ? 'white' : scrolled ? 'white' : 'transparent'} // Cambia el fondo cuando el navbar está abierto o hace scroll
          variant="light"
          expand="lg"
          fixed="top" // Asegura que el navbar se quede fijo en la parte superior
          style={{
            transition: 'background-color 0.3s ease', // Transición para el cambio de color
          }}
        >
          <Container fluid className='mx-3'>
            <Navbar.Brand href="#home">
              <img src="Logo.png" alt="Logo" style={{ height: '50px' }} />
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              onClick={handleNavbarToggle} // Cambia el estado cuando se hace clic
            />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link className={scrolled ? 'text-dark nav-link' : 'text-white nav-link'} href="#about">About</Nav.Link>
                <Nav.Link className={scrolled ? 'text-dark nav-link' : 'text-white nav-link'} href="#skills">Skills</Nav.Link>
                <Nav.Link className={scrolled ? 'text-dark nav-link' : 'text-white nav-link'} href="#portfolio">Portfolio</Nav.Link>
                <Nav.Link className={scrolled ? 'text-dark nav-link' : 'text-white nav-link'} href="#experience">Experience</Nav.Link>
                <Nav.Link className={scrolled ? 'text-dark nav-link' : 'text-white nav-link'} href="#contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Imagen de fondo extendida debajo del Navbar */}
        <div className="img-nav-container"></div>
      </div>

      <div className='mx-3'>
        <Container
          fluid
          className="d-flex flex-column justify-content-center align-items-center"
          style={{
            marginTop: `${navbarHeight}px`, // Mantiene el margen para que no se superponga al navbar
          }}
        >
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
      </div>

    </Container>
  );
}

export default App;
