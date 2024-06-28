import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

export const Banner = () => {
  return (
    <Container fluid className="main-content">
      {/* Central Content */}
      <Row>
        <Col md={6} className="d-flex align-items-center">
          <div className="central-content">
            <img
              src="https://i.ibb.co/myLJDGN/banner5.jpg"
              alt="animated character flying with a book opened as wings"
              className="central-image"
            />
          </div>
        </Col>
        <Col md={6} className="d-flex align-items-center">
          <div>
            <h2 className="main-content-banner">
              Explore, Learn, and Imagine in Every Chapter
            </h2>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
