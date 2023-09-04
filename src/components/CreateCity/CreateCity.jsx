import { Button, InputGroup } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import { createCity, getLastIdCity } from '../../services/cityService';

import './createCity.css'
import { useEffect, useState } from 'react';
import { createTinerary } from '../../services/tineraryService';

function CreateCity() {

  const [idCity, setIdCity] = useState({'id':'null'});
  const [showBtn1, setShowBtn1] = useState(true);
  const [showBtn2, setShowBtn2] = useState(true);
  const [showBtn3, setShowBtn3] = useState(true);

  const create = () => {
    const name = document.getElementById('city-name').value;
    const region = document.getElementById('city-region').value;
    const currency = document.getElementById('city-currency').value;
    const description = document.getElementById('city-description').value;
    const image = document.getElementById('city-image').value;
    const lat = document.getElementById('city-lat').value;
    const lng = document.getElementById('city-lng').value;

    const data = {
      title: name,
      region: region,
      currency: currency,
      info: description,
      img: image,
      location: {
        lat: lat,
        lng: lng
      }
    }
    createCity(data);
    getLastIdCity().then((id)=> setIdCity(id[0]._id));
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

  const addItinerary = (button) => {
    getLastIdCity().then((id)=> setIdCity(id[0]._id));
    const name = document.getElementById('title-'+button).value;
    const price = document.getElementById('price-'+button).value;
    const description = document.getElementById('description-'+button).value;
    const duration = document.getElementById('duration-'+button).value;
    const image = document.getElementById('img-'+button).value;
  
    const dataItineraty = {
      title: name,
      price: price,
      duration: duration,
      info: description,
      img: image,
      city: idCity
    }
    console.log(idCity)
    createTinerary(dataItineraty);
    setIdCity('null')
    console.log(idCity)
  }

  return (
    <Form className='form p-3'>
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
          <Button variant="warning" onClick={create}>Add city</Button>
        </Col>
        <Col lg="12" className='itineraries py-1'>
          <Row>
            <Col lg="4">
              <p>Tinerary 1</p>
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
              <div className='py-3'>
                <Button variant="warning" onClick={() => saveData('1')}>Add itinerary</Button>
                <Button disabled={showBtn1} variant="warning" onClick={() => addItinerary('1')}>Confirm</Button>
              </div>
            </Col>
            <Col lg="4">
              <p>Tinerary 2</p>
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
              <div className='py-3'>
                <Button variant="warning" onClick={() => saveData('2')}>Add itinerary</Button>
                <Button disabled={showBtn2} variant="warning" onClick={() => addItinerary('2')}>Confirm</Button>
              </div>
            </Col>
            <Col lg="4">
              <p>Tinerary 3</p>
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
              <div className='py-3'>
                <Button variant="warning" onClick={() => saveData('3')}>Add itinerary</Button>
                <Button disabled={showBtn3} variant="warning" onClick={() => addItinerary('3')}>Confirm</Button>
              </div>
              
            </Col>
          </Row>
        </Col>
      </Row>
    </Form>
  );
}

export default CreateCity;