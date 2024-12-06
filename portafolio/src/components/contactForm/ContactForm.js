import React, { useState } from 'react';
import { Form, Col, Row } from 'react-bootstrap';
import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import emailjs from 'emailjs-com';
import './ContactForm.css';
import '../profileCard/ProfileCard.css';

const ContactForm = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .send(
                'service_a953jxr', // Reemplaza con tu Service ID de EmailJS
                'template_u0811cn', // Reemplaza con tu Template ID de EmailJS
                formData,
                'fC2x6WfIM7fzzrsJD' // Reemplaza con tu Public Key de EmailJS
            )
            .then(
                () => {
                    setSuccessMessage(t('messageSuccess'));
                    setErrorMessage('');
                    setFormData({ name: '', email: '', message: '' });
                },
                () => {
                    setErrorMessage(t('messageError'));
                    setSuccessMessage('');
                }
            );
    };

    return (
        <div className="contact-form-container my-5">
            <h2 className="text-center mb-4">{t('contactTittle')}</h2>
            <Row className="contact-form d-flex justify-content-center">
                <Col md={3} className="contact-form-left shadow mx-3">
                    <h2>{t('contactSubTittle')}</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formName" className="contact-form-input">
                            <Form.Label>{t('contactName')}</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formEmail" className="contact-form-input">
                            <Form.Label>{t('contactEmail')}</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formMessage" className="contact-form-input">
                            <Form.Label>{t('contactMessage')}</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={4}
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <button
                            type="submit"
                            className="button-transform text-color-black"
                            style={{ textTransform: 'uppercase' }}
                        >
                            {t('btnEnviar')}
                        </button>
                    </Form>
                    {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
                    {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                </Col>
            </Row>
            <Row className="social-media-footer">
                <Col md={3} className="background-primary shadow mx-3">
                    <Row className="background-primary social-media-footer">
                        <div className="container-social-icon">
                            <FaLinkedinIn className="text-white social-icon" />
                        </div>
                        <div className="container-social-icon">
                            <FaGithub className="text-white social-icon" />
                        </div>
                        <div className="container-social-icon">
                            <FaWhatsapp className="text-white social-icon" />
                        </div>
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default ContactForm;
