import React, { useEffect, useState } from 'react';

import { Container, InputGroup } from 'react-bootstrap';
import { AiFillEdit } from "react-icons/ai";
import { Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import { getAllCities, getOneCity } from '../../services/cityService.js' 
import './editCity.css'

const EditCity = () => {

    const [cities, setCities] = useState([]);
    const [city, setCity] = useState([]);
    const [showBtn1, setShowBtn1] = useState(true);
    const [showBtn2, setShowBtn2] = useState(true);
    const [showBtn3, setShowBtn3] = useState(true);
    const [showEditCity, setShowEditCity] = useState(true);
    const [showListCity, setShowListCity] = useState(false);

    const editCity = (id) =>{
        setShowEditCity(false);
        setShowListCity(true);
        getOneCity(id).then((c)=> setCity(c));
        console.log(city)
    }

    useEffect(() => {
        getAllCities().then(setCities);
    },[]);

    const edit = () => {
        console.log('hola')
      }

      const editCancel = () => {
        setShowEditCity(true);
        setShowListCity(false);
      }
    

    const saveData = (button) => {
        getLastIdCity().then((id)=> setIdCity(id[0]._id));
        if(button == '1'){
          setShowBtn1(false)
        }else if(button == '2'){
          setShowBtn2(false)
        }else{
          setShowBtn3(false)
        }
      }

    return (
        <Container>
            <div className={showListCity ? "hideListCity" : "showListCity" }>
                <h1>EN PROCESO</h1>
            {cities.map(c =>
                <div key={c.title} className='py-1'>
                    <Row>
                        <Col lg="10" xs="4">
                            <p className='title-style'>{c.title}</p>
                        </Col>
                        <Col lg="2" xs="4">
                            <button onClick={() =>editCity(c._id)}><AiFillEdit/></button>
                            
                        </Col>
                    </Row>
                </div>
            )}   
            </div>
                
            <Form className={showEditCity ? "hideEditCity" : "showEditCity" }>
                <Row>
                    <Col className='py-1'>
                    <Form.Control id='city-name' placeholder="City name" />
                    </Col>
                    <Col className='py-1'>
                        <Form.Select id='city-region' aria-label="select region">
                            <option disabled>select region</option>
                            <option value="America">America</option>
                            <option value="Africa">Africa</option>
                            <option value="Asia">Asia</option>
                            <option value="Europe">Europe</option>
                            <option value="Oceania">Oceania</option>
                        </Form.Select>
                    </Col>
                    <Col className='py-1'>
                    <Form.Control id='city-currency' placeholder="City currency" />
                    </Col>
                    <Col lg="12" xs="4" className='py-1'>
                        <InputGroup>
                            <InputGroup.Text>Description</InputGroup.Text>
                            <Form.Control id='city-description' className='mx-1' as="textarea" aria-label="With textarea" />
                        </InputGroup>
                    </Col>
                    <Col className='py-1'>
                    <Form.Control id='city-image' placeholder="Link main image" />
                    </Col>
                    <Col className='py-1'>
                    <InputGroup className="mb-3">
                        <InputGroup.Text>Location: </InputGroup.Text>
                        <Form.Control id='city-lat' className='mx-1' aria-label="lat" placeholder="lat"/>
                        <Form.Control id='city-lng' aria-label="lng" placeholder="lng"/>
                    </InputGroup>
                    </Col>
                    <Col lg="12">
                    </Col>
                    <Col lg="12" className='itineraries py-1'>
                    <Row>
                        <Col lg="4">
                        <p>Itinerary 1</p>
                        <div className='py-1'>
                            <Form.Control id='title-1' placeholder="Title" />
                        </div>
                        <div className='py-1'>
                            <Form.Control id='img-1' placeholder="Link main image" />
                        </div>
                        <div className='py-1'>
                            <Form.Control id='duration-1' placeholder="Duration" />
                        </div>
                        <div className='py-1'>
                        <Form.Control id='price-1' placeholder="Price" />
                        </div>
                        <InputGroup>
                            <InputGroup.Text>Description</InputGroup.Text>
                            <Form.Control id='description-1' className='mx-1' as="textarea" aria-label="With textarea" />
                        </InputGroup>
                        </Col>
                        <Col lg="4">
                        <p>Itinerary 1</p>
                        <div className='py-1'>
                            <Form.Control id='title-2' placeholder="Title" />
                        </div>
                        <div className='py-1'>
                            <Form.Control id='img-2' placeholder="Link main image" />
                        </div>
                        <div className='py-1'>
                            <Form.Control id='duration-2' placeholder="Duration" />
                        </div>
                        <div className='py-1'>
                        <Form.Control id='price-2' placeholder="Price" />
                        </div>
                        <InputGroup>
                            <InputGroup.Text>Description</InputGroup.Text>
                            <Form.Control id='description-2' className='mx-1' as="textarea" aria-label="With textarea" />
                        </InputGroup>
                        </Col>
                        <Col lg="4">
                        <p>Itinerary 1</p>
                        <div className='py-1'>
                            <Form.Control id='title-3' placeholder="Title" />
                        </div>
                        <div className='py-1'>
                            <Form.Control id='img-3' placeholder="Link main image" />
                        </div>
                        <div className='py-1'>
                            <Form.Control id='duration-3' placeholder="Duration" />
                        </div>
                        <div className='py-1'>
                        <Form.Control id='price-3' placeholder="Price" />
                        </div>
                        <InputGroup>
                            <InputGroup.Text>Description</InputGroup.Text>
                            <Form.Control id='description-3' className='mx-1' as="textarea" aria-label="With textarea" />
                        </InputGroup>
                        
                        </Col>
                    </Row>
                    </Col>
                </Row>
                    <Button variant="warning" onClick={edit}>Edit city</Button>
                    <Button variant="warning" onClick={editCancel}>Cancel</Button>
                </Form>   
        </Container>
    );
  };
  
  export default EditCity;