import React, { useEffect, useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './cities.css'
import GaleryCities from '../../components/GaleryCities/GaleryCities';
import SearchCities from '../../components/FormSearchCities/SearchCities';
import { getAllCities } from '../../services/cityService.js' 

const Cities = () => {

  const [cities, setCities] = useState([]);
  const [fixedCities, setFixedCities] = useState([]);

  useEffect(() => {
    getAllCities().then(setCities);
    getAllCities().then(setFixedCities);
  },[]);

  const c = cities

  return (
    <Container className='body-cities'>
            <Row className='align-items-end justify-content-between'>
              <Col lg="12" md="12" xs="12"><img src='https://i.pinimg.com/originals/93/c0/50/93c050664f39198abe830b1dd66079d7.jpg'></img></Col>
                <Col lg="12" md="12" xs="12">
                  <SearchCities cities={[setCities,cities,fixedCities]} />
                </Col>
                <Col lg="12" md="12" xs="12" className='py-5'>
                    <GaleryCities cities={cities}/>
                </Col>
            </Row>
    </Container>
  );
};

export default Cities;