import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLinkedinIn, FaGithub,FaWhatsapp } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import './ProfileCard.css';

function ProfileCard() {

  const { t } = useTranslation();

  return (
    <Container className="my-5 shadow">
      <Row className='background-white'>
        <Col lg={5} md={5} xs={12} className="d-flex justify-content-center align-items-center">
          <img src='Logo.png' alt='Logo' style={{ width: '80%' }} />
        </Col>
        <Col lg={7} md={7} xs={12} className="d-flex flex-column justify-content-top">
          <Row>
            <span className='message mb-2'>{t('profileHello')}</span>
          </Row>
          <Row>
            <h1>
              <span style={{ fontWeight: 'normal' }}>I'm </span>Cristopher Salazar
            </h1>
          </Row>
          <Row>
            <p style={{ textAlign: 'justify', fontSize: '18px' }}>Full stack developer with a strong background in creating and maintaining web applications and software solutions. My experience ranges from developing intuitive interfaces to implementing complex business logic. I specialize in optimizing systems and processes to improve efficiency and customer satisfaction, with a focus on problem-solving and continuous improvement.</p>
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
