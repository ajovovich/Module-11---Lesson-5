import React from 'react';
import { Container, Row, Col, Image, Button, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import errorImage from '../assets/error.png';

const NotFound = () => {
  return (
    <Container className="text-center" style={{ marginTop: '50px' }}>
      <Row>
        <Col>
          <h1 style={{ color: '#dc3545' }}>404 - Page Not Found</h1>
          <p style={{ color: '#6c757d' }}>
            Oops! The page you are looking for does not exist.
          </p>
        </Col>
      </Row>
      <Row className="my-4">
        <Col md={{ span: 6, offset: 3 }}>
          <Image src={errorImage} fluid alt="Not Found" />
        </Col>
      </Row>
      <Row>
        <Col>
          <Nav.Link as={NavLink} to="/">
            <Button variant="primary">Go to Homepage</Button>
          </Nav.Link>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
