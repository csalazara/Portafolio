import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLinkedinIn, FaGithub,FaWhatsapp } from "react-icons/fa";
import './ProfileCard.css';

function ProfileCard() {

  return (
    <Container className="my-5 shadow">
      <Row>
        <Col lg={5} md={5} xs={12} className="d-flex justify-content-center align-items-center">
          <img src='Logo.png' alt='Logo' style={{ width: '80%' }} />
        </Col>
        <Col lg={7} md={7} xs={12} className="d-flex flex-column justify-content-top">
          <Row>
            <span className='message mb-2'>Hello</span>
          </Row>
          <Row>
            <h1>
              <span style={{ fontWeight: 'normal', color: 'black' }}>I'm </span>Cristopher Salazar
            </h1>
          </Row>
          <Row>
            <p style={{ textAlign: 'justify', fontSize: '18px' }}>Desarrollador full stack con una sólida trayectoria en la creación y 
                mantenimiento de aplicaciones web y soluciones de software. Mi experiencia 
                abarca desde el desarrollo de interfaces intuitivas hasta la implementación de 
                complejas lógicas de negocio. Me especializo en optimizar sistemas y procesos 
                para mejorar la eficiencia y la satisfacción del cliente, con un enfoque en la 
                resolución de problemas y la implementación de mejoras continuas.</p>
          </Row>
        </Col>
      </Row>
      <Row className='background-primary social-media-footer'>
        <div className='container-social-icon'>
          <FaLinkedinIn className='text-white social-icon' />
        </div>
        <div className='container-social-icon'>
          <FaGithub className='text-white social-icon' />
        </div>
        <div className='container-social-icon'>
          <FaWhatsapp className='text-white social-icon' />
        </div>
      </Row>
    </Container>
  );
}

export default ProfileCard;
