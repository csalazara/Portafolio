import React from 'react';
import { Row, Container, Card } from 'react-bootstrap';
import { FaGithub } from "react-icons/fa";
import './Projects.css';

function Projects() {

  const projects = [
    {
      img: 'projects/cars.gif',
      title: 'Cars',
      description: `Cars desc jknjhd jhdf kjdshf kjsdhkjsdh skjdhf skjsdh fsdjhfksd skdfjhkd jdhf skjhd sj sdjkfh sdjsdhf jhds kjsdh ksjdfh kjsdhf kjsdfh sjdhf kjsdhf`,
      url:''
    },
    {
      img: 'projects/dungeon.gif',
      title: 'Dungeon',
      description: `Dungeon desc jknjhd jhdf kjdshf kjsdhkjsdh skjdhf skjsdh fsdjhfksd skdfjhkd jdhf skjhd sj sdjkfh sdjsdhf jhds kjsdh ksjdfh kjsdhf kjsdfh sjdhf kjsdhf`,
      url:''
    },
    {
      img: 'projects/dungeon.gif',
      title: 'Dungeon',
      description: `Dungeon desc jknjhd jhdf kjdshf kjsdhkjsdh skjdhf skjsdh fsdjhfksd skdfjhkd jdhf skjhd sj sdjkfh sdjsdhf jhds kjsdh ksjdfh kjsdhf kjsdfh sjdhf kjsdhf`,
      url:''
    },
    {
      img: 'projects/dungeon.gif',
      title: 'Dungeon',
      description: `Dungeon desc jknjhd jhdf kjdshf kjsdhkjsdh skjdhf skjsdh fsdjhfksd skdfjhkd jdhf skjhd sj sdjkfh sdjsdhf jhds kjsdh ksjdfh kjsdhf kjsdfh sjdhf kjsdhf`,
      url:''
    },
  ];

  return (
    <Container fluid className="my-5">
      <h2 className="text-center mb-4">Projects</h2>

      <Row className="gy-4 justify-content-center">
        {projects.map((project, index) => (
          <Card className="mx-3 shadow" key={index} style={{ width: '30rem' }}>
            <Card.Img variant="top" src={project.img} className="mt-1" />
            <Card.Body>
              <Card.Title>{project.title}</Card.Title>
              <Card.Text>
                {project.description}
              </Card.Text>
              <div className="d-flex justify-content-end">
                <button className="button-transform">
                  <FaGithub className="social-icon" />
                </button>
              </div>
            </Card.Body>
          </Card>

        ))}
      </Row>

    </Container>
  );
}

export default Projects;
