import React from 'react';

import { CloseButton, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

import './cardCity.css';
import ToastCity from '../Toast/Toast';
import Map from '../Map/Map.jsx'

const CardCity = (props) => {

  const city = props.data[0][0];

  const close = () =>{
    const elem = document.querySelector(".xxx");
    elem.classList.replace("xxx", "app-layout");
    props.data[1](true);
  }

  return (
    city && 
    <Card style={{ width: '100%' }} className='card-city'>
        < CloseButton className='bg-white btn-close' onClick={close} />
        <Card.Img className='img-city' variant="top" src={city.img} />
        <Card.Body>
            <Card.Title className='title-city'>{city.title}</Card.Title>
            <Card.Text className='title-info'>{city.info}</Card.Text>
        </Card.Body>
        <Card.Body className='map'>
            <Row className='justify-content-end py-2'>
              <Col lg="8" xs="4" >
                <ToastCity data={[city.tineraries]}/>
              </Col>
              <Col lg="4" xs="4">
                <Map/>
              </Col>
            </Row>
        </Card.Body>
    </Card>
  );
}

export default CardCity;