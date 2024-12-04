import React from "react";
import { Container } from 'react-bootstrap';
import "./TechCarousel.css"; // Archivo CSS para estilos

const TechCarousel = () => {
  const images = [
      "skills/angular.png",
      "skills/Bootstrap.png",
      "skills/cc.png",
      "skills/css.png",
      "skills/git.png",
      "skills/html5.png",
      "skills/java.png",
      "skills/javascript.png",
      "skills/jquery.png",
      "skills/net.png",
      "skills/react.png",
      "skills/spring-boot.png",
      "skills/sql.png",
      "skills/typescript.png",
  ];

    return (
        <Container fluid className="my-5">
            <h2 className="text-center mb-4">Skills</h2>

            <div className="slider">
                <div className="slide-track">
                    {images.concat(images).map((src, index) => (
                        <div className="slide" key={index}>
                            <img src={src} alt={`Logo ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </div>
        </Container>

    );
};

export default TechCarousel;
