import React, { useEffect, useRef, useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './galeryCities.css'
import CardCity from '../CardCity/CardCity';
import { getOneCity } from '../../services/cityService';
import { useDispatch, useSelector } from 'react-redux';

import { getCity } from '../../redux/actions/cityActions.js'
import { getOneTinerary } from '../../services/tineraryService';

const GaleryCities = () => {

  const buttonChange = useRef(null);
  const dispatch = useDispatch();
  const cityStore = useSelector((store)=>store.cities);
  const cities = cityStore.cities;
  const [itineraries, setItineraries] = useState();
  const it= [

  ]
  const [showCity, setShowCity] = useState(true);

  const handleCardChange = (id) => {
    const elem = document.querySelector(".app-layout");
    elem.classList.replace("app-layout", "xxx");
    setShowCity(!showCity);
    getOneCity(id).then(city=>dispatch(getCity(city)));
    cityStore.city[0].tineraries.map(i => {
      getOneTinerary(i).then(i=>it.push(i))
    })
    setItineraries(it)
  } 


  return (
    <Container >
      <Row>
        {cities.map(i =>
          <Col key={i.title} lg="4" xs="4" className='py-1'>
            <button className='info-place-card'  onClick={() => handleCardChange(i._id)} ref={buttonChange}>
              <img src={i.img}></img>
              <div >
                <p className='title'><b>{i.title}</b></p>
              </div>
            </button>
          </Col>
        )}
      </Row>
      <div className={showCity ? "hideCity" : "showCity" } >
        < CardCity data={[setShowCity, itineraries]}/>
      </div>
      
    </Container>
  );
};

export default GaleryCities;