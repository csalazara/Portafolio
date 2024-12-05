import React from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';
import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import './ContactForm.css';
import '../profileCard/ProfileCard.css'

const ContactForm = () => {
    const { t } = useTranslation();
    return (
        <div className="contact-form-container my-5">
            <h2 className="text-center mb-4">{t('contactTittle')}</h2>
            <Row className="contact-form d-flex justify-content-center">
                <Col md={3} className="contact-form-left shadow mx-3">
                    <h2>{t('contactSubTittle')}</h2>
                    <Form>
                        <Form.Group controlId="formName" className="contact-form-input">
                            <Form.Label>{t('contactName')}</Form.Label>
                            <Form.Control type="text" placeholder="" />
                        </Form.Group>

                        <Form.Group controlId="formEmail" className="contact-form-input">
                            <Form.Label>{t('contactEmail')}</Form.Label>
                            <Form.Control type="email" placeholder="" />
                        </Form.Group>

                        <Form.Group controlId="formMessage" className="contact-form-input">
                            <Form.Label>{t('contactMessage')}</Form.Label>
                            <Form.Control as="textarea" rows={4} placeholder="" />
                        </Form.Group>

                        <button className="button-transform text-color-black" style={{ textTransform: 'uppercase' }}>{t('btnEnviar')}</button>
                    </Form>
                </Col>
            </Row>
            <Row className='social-media-footer'>
                <Col md={3} className="background-primary shadow mx-3">
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
                </Col>
            </Row>
        </div>
    );
};

export default ContactForm;
