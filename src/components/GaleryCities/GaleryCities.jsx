import React, { useEffect, useRef, useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './galeryCities.css'
import CardCity from '../CardCity/CardCity';
import { getOneCity } from '../../services/cityService';


const GaleryCities = (props) => {

  const {cities} = props; 

  const buttonChange = useRef(null);

  const [city, setCity] = useState({'title':'null'});
  const [showCity, setShowCity] = useState(true);

  const handleCardChange = (id) => {
    const elem = document.querySelector(".app-layout");
    elem.classList.replace("app-layout", "xxx");
    setShowCity(!showCity);
    getOneCity(id).then((c)=>setCity(c));

    
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
        < CardCity data={[city, setShowCity]}/>
      </div>
      
    </Container>
  );
};

export default GaleryCities;