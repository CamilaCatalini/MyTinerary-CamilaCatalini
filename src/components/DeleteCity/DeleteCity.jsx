import React, { useEffect, useState } from 'react';

import { Container, InputGroup } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { AiFillDelete } from "react-icons/ai";

import { getAllCities, deleteOneCity } from '../../services/cityService.js' 
import './deleteCity.css'

const DeleteCity = () => {

    const [cities, setCities] = useState([]);

    const deleteCity = (id) =>{
        deleteOneCity(id).then();
    }

    useEffect(() => {
        getAllCities().then(setCities);

    },[]);

    return (
        <Container>
            {cities.map(c =>
                <div key={c.title} className='py-1'>
                    <Row>
                        <Col lg="10" xs="4">
                            <p className='title-style'>{c.title}</p>
                        </Col>
                        <Col lg="2" xs="4">
                            <button onClick={() => deleteCity(c._id)}><AiFillDelete/></button>
                        </Col>
                    </Row>
                </div>
            )}          
        </Container>
      );
  };
  
  export default DeleteCity;