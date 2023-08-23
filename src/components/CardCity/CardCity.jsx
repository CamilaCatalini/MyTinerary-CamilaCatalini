import React, { useEffect, useState } from 'react';

import { CloseButton, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

import './cardCity.css'

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
            <Row className='justify-content-end py-4'>
              <Col lg="4" xs="4"><p>Region:</p></Col>
              <Col lg="4" xs="4"><p>Currency:</p></Col>
            </Row>
        </Card.Body>
        <Card.Body className='map'>
          MAPA
        </Card.Body>
    </Card>
  );
}

export default CardCity;