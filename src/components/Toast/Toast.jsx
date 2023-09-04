import { Col, Row } from 'react-bootstrap';
import Toast from 'react-bootstrap/Toast';
import { FcLike } from "react-icons/fc";
import AccordionCity from '../Accordion/Accordion';
import { getOneTinerary } from '../../services/tineraryService'

import'./toast.css'
import { useEffect, useState } from 'react';

function ToastCity(props) {
  const tineraries = props.data;

  const [tineraties, setTineraries] = useState([]);
  const tinerariesList = [];

  tineraries[0].forEach(element => {
      getOneTinerary(element).then((t)=>tinerariesList.push(t));
  });

  return (
    tineraries && 
    <Toast bg='dark' className='toast-city'>
      <Toast.Header closeButton={false}>
        <img style={{ width: '30px', height: '30px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJbMBtleQ0FxP8CHkmDkp2Gqi3XBe-w2YYgQ&usqp=CAU" className="rounded me-2" alt="" />
        <strong className="me-auto">By Camila Catalini</strong>
        <small className='align-item-center'>23</small><button className='btn-like'><FcLike style={{ width: '15px', height: '15px'}} /></button>
      </Toast.Header>
      <Toast.Body>
        <Row>
            <Col lg="12" className='justify-content-center'>< AccordionCity data={[tinerariesList]}/></Col>
        </Row>
      </Toast.Body>
    </Toast>
  );
}

export default ToastCity;