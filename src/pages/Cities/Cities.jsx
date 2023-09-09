import React, { useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './cities.css'
import GaleryCities from '../../components/GaleryCities/GaleryCities';
import SearchCities from '../../components/FormSearchCities/SearchCities';
import { getAllCities } from '../../services/cityService.js' 
import { useSelector, useDispatch } from 'react-redux';

import { getCities } from '../../redux/actions/cityActions.js'

const Cities = () => {

  const dispatch = useDispatch();

  const citiesStore = useSelector((store)=>store.cities);
  
  useEffect(() => {
    getAllCities().then(cities=>dispatch(getCities(cities)));
  },[]);

  return (
    <Container className='body-cities'>
            <Row className='align-items-end justify-content-between'>
              <Col lg="12" md="12" xs="12"><img src='https://i.pinimg.com/originals/93/c0/50/93c050664f39198abe830b1dd66079d7.jpg'></img></Col>
                <Col lg="12" md="12" xs="12">
                  <SearchCities cities={[citiesStore.filterCities]} />
                </Col>
                <Col lg="12" md="12" xs="12" className='py-5'>
                    <GaleryCities/>
                </Col>
            </Row>
    </Container>
  );
};

export default Cities;