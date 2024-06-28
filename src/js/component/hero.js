import React from "react";
import { Container } from "react-bootstrap";
import hero from "../../styles/hero.css";

export const Hero = () => {
  return (
    <div className="banner">
      <Container fluid>
        <div className="banner-content">
          <h1>Welcome to Story World Adventures</h1>
          <p>Explore, Learn and Imagine in Every Chapter</p>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
