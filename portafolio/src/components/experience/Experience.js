import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Experience.css';
import { TbWorld } from "react-icons/tb";

function Experience() {

    const experiences = [
        {
          yearRange: 'February 2024 - Present',
          icon: <TbWorld  />,
          title: 'Software Developer Analyst - Grupo Prides',
          description: `Responsible for managing a series of integrated web projects, developing new
            functionalities, and providing ongoing maintenance and support for these systems.
            My role includes ensuring the optimal performance of each project, delivering
            effective solutions, and guaranteeing a high-quality user experience.`,
        },
        {
          yearRange: 'February 2023 - February 2024',
          icon: <TbWorld  />,
          title: 'Junior Software Developer - Grupo Diverscan S.A.',
          description: `As a junior software developer, I focus on developing websites for asset
            management. I collaborate closely with cross-functional teams to design, build, and
            maintain websites that enhance user experiences and streamline asset
            management processes, all while adhering to quality standards and meeting our
            clients' requirements.`,
        },
        {
          yearRange: 'September 2022 - October 2022',
          icon: <TbWorld  />,
          title: 'Full Stack Developer Freelance - Intel',
          description: `As a developer, worked on implementing the front-end of an internal business
            application used for CRUD operations on users and products using ReactJS,
            including the integration with the existing .NET back-end logic that connected with
            the persistence layer. This was done following the design of the team's tech lead.`,
        },
      ];

  return (
    <Container fluid className="my-5">
      <h2 className="text-center mb-4">Work Experience</h2>
      <Row className="gy-4">
        {experiences.map((experience, index) => (
          <Col md={6} key={index}>
            <Card className="h-100 shadow border-0">
              <Card.Body>
                <h5 className="color-primary">{experience.title}</h5>
                <div className="d-flex align-items-center my-3">
                  <div className="icon-container color-secondary">{experience.icon}</div>
                  <h6 className="ms-3 mb-0 fw-bold">{experience.yearRange}</h6>
                </div>
                <Card.Text>{experience.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Experience;
