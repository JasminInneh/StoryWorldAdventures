import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import footer from "../../styles/footer.css";

export const Footer = () => {
  return (
    <footer className="footer text-center text-lg-start" id="footer">
      <Container className="p-4">
        <Row>
          <Col lg={4} className="mb-4 mb-lg-0">
            <h5 className="text-uppercase">Contact Us</h5>
            <p>
              Miami, Florida <br />
              Phone: +1 234 567 890
              <br />
              Email: jasmininneh@gmail.com
            </p>
          </Col>
          <Col lg={4}>
            <h5 className="text-uppercase">Company</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!" className="text-light">
                  Follow us on Instagram
                </a>
              </li>
              <li>
                <a href="#!" className="text-light">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#!" className="text-light">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#!" className="text-light">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </Col>
          <Col lg={4}>
            <h5 className="text-uppercase">Community</h5>
            <ul className="footer-icons list-unstyled d-flex justify-content-start align-items-start mt-3">
              <li className="mx-2">
                <a href="#!" className="text-light">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li className="mx-2">
                <a href="#!" className="text-light">
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
