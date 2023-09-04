import React, { useEffect, useRef, useState } from 'react';
import { getAllRegions, getOneRegion } from '../../services/regionService';

import {Form,FormControl,InputGroup} from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { getAllCities } from '../../services/cityService';

import './searchCities.css'

function SearchCities(props) {

  const cities = props.cities[2];
  

  const [regions, setRegions] = useState([]);
  const inputSearch = useRef(null);
  const selectOption = useRef(null);

  const handleChange = () =>{
    const region = selectOption.current.value;
    if(region == 'All cities'){
      getAllCities().then(props.cities[0]);
    }else{
      getOneRegion(region).then((r)=>props.cities[0](r[0].cities));
    }
  } 

  const handleChangeSearch = () =>{
    const newCities = [];
    const region = inputSearch.current.value;
    console.log(region);

    if (selectOption.current.value == 'All cities'){
      cities.forEach(element => {
        if(element['title'].substr(0,region.length).toLowerCase() == region.toLowerCase()){
          newCities.push(element);
        }
      });
    }else{
      cities.forEach(element => {
        if(element['title'].substr(0,region.length).toLowerCase() == region.toLowerCase()){
          newCities.push(element);
        }
      });
    }

    if(region == '' && selectOption.current.value == 'All cities'){
      getAllCities().then(props.cities[0]);
    }else{
      props.cities[0](newCities);
    }
  }

  useEffect(() => {
    getAllRegions().then((r)=>setRegions(r.map(i => i.region)));
  },[]);

  return (
    <Container>
            <Row className='align-items-center'>
                <Col lg="4" md="6" xs="6">
                  <Form>
                      <InputGroup>
                        <FormControl onKeyUp={handleChangeSearch} ref={inputSearch} className="bg-dark text-white" type="search" placeholder="Search" />
                      </InputGroup>
                  </Form>
                </Col>
                <Col lg="4" md="6" xs="6" className='py-5'>
                  <FloatingLabel className='form-region ' controlId="floatingSelect" label="Select region">
                    <Form.Select className='bg-dark text-white' onInput={handleChange} ref={selectOption}>
                      <option defaultValue="all">All cities</option>
                      {regions.map(region => <option key={region} defaultValue={region}>{region}</option>)}
                    </Form.Select>
                  </FloatingLabel>
                </Col>
            </Row>
    </Container>
  );
}

export default SearchCities;