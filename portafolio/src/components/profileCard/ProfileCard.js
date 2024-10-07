import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './ProfileCard.css';

function ProfileCard() {

  return (
    <Container className="my-5 p-4">
      <Row>
        <Col lg={5} md={5} xs={12} className="d-flex justify-content-center align-items-center">
          <img src='Logo.png' alt='Logo' style={{ width: '100%' }} />
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
            <label>Developer</label>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default ProfileCard;
