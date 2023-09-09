import { CloseButton, Row, Col, Toast, Accordion, useAccordionButton } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { FcLike } from "react-icons/fc";

import './cardCity.css';
import Map from '../Map/Map.jsx'
import { useSelector } from 'react-redux';

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log('totally custom!'),
  );

  return (
    <button
      type="button"
      style={{ backgroundColor: 'pink' }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

const CardCity = (props) => {

  const cityStore = useSelector((store)=>store.cities);
  const city = cityStore.city[0];
  const itineraries = []
  


  const close = () =>{
    const elem = document.querySelector(".xxx");
    elem.classList.replace("xxx", "app-layout");
    props.data[0](true);
  }
  
  return (
    city&&
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
              <Toast bg='dark' className='toast-city'>
                <Toast.Header closeButton={false}>
                  <img style={{ width: '30px', height: '30px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJbMBtleQ0FxP8CHkmDkp2Gqi3XBe-w2YYgQ&usqp=CAU" className="rounded me-2" alt="" />
                  <strong className="me-auto">By Camila Catalini</strong>
                  <small className='align-item-center'>23</small><button className='btn-like'><FcLike style={{ width: '15px', height: '15px'}} /></button>
                </Toast.Header>
                <Toast.Body>
                  <Row>
                      <Col lg="12" className='justify-content-center'>
                        <Accordion defaultActiveKey="0">
                          <Card className='p-0'>
                            <Card.Header>
                              <CustomToggle eventKey="1">Click me!</CustomToggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                              <Card.Body>
                                <Row>
                                    {itineraries.map(i =>
                                    <Col lg="4" xs="4" className='tinerary'>
                                      <Card.Body>
                                        <Card.Img variant="top" src={i.img}/>
                                        <Card.Title>{i.title}</Card.Title>
                                        <Card.Text>{i.info}</Card.Text>
                                      </Card.Body>
                                    </Col>
                                  )}
                                </Row>
                              </Card.Body>
                            </Accordion.Collapse>
                          </Card>
                        </Accordion>
                      </Col>
                  </Row>
                </Toast.Body>
              </Toast>
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