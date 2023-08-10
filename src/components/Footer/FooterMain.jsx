import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './footer.css'

const Footer = () => {
  return (
    <footer className="app-footer">
      <Container > 
        <Row className='d-flex justify-content-center'> 
            <Col lg="2" md="2" xs="4">
                <img className='img-nav' src='./Mytinerary-icon.png'></img>
            </Col>
            <Col lg="12" md="12" xs="12" className="py-3">
              <Row>
                <Col lg="4" md="4" xs="3"><hr></hr></Col>
                <Col lg="4" md="4" xs="6">
                  <a href="https://ar.linkedin.com/in/camila-catalini" target="_blank"><img src="./social-networks/instagram-icon.png"></img></a>
                  <a href="https://www.instagram.com/kamii_ctln/" target="_blank" className="px-2"><img src="./social-networks/linkedin-icon.png"></img></a>
                  <a href="https://api.whatsapp.com/send?phone=2215964468" target="_blank"><img src="./social-networks/whatsapp-icon.png"></img></a>
                </Col>
                <Col lg="4" md="4" xs="3"><hr></hr></Col>
              </Row>
            </Col>
            <Col lg="8" md="4" xs="6" className="pt-2 pb-1">
              <p className="text-center">Mindhub AP MERN 08 - Camila Catalini</p>
            </Col>
        </Row>
      </Container>
    </footer>
    
  );
};

export default Footer;