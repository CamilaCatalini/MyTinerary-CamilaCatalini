import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './cities.css'
import GaleryCities from '../../components/GaleryCities/GaleryCities';
import FormSelectRegion from '../../components/FormSelectRegion/FormSelectRegion';
import SearchCities from '../../components/FormSearchCities/SearchCities';

const Cities = () => {
  return (
    <Container className='body-cities'>
            <Row className='align-items-end justify-content-between'>
                <Col lg="6" md="12" xs="12" className='py-3'>
                    <SearchCities />
                </Col>
                <Col lg="4" md="12" xs="12" className='py-3'>
                  <FormSelectRegion />
                </Col>
                <Col lg="12" md="10" xs="10"><img src='https://i.pinimg.com/originals/93/c0/50/93c050664f39198abe830b1dd66079d7.jpg'></img></Col>
                <Col lg="12" md="10" xs="10" className='py-5'>
                    <GaleryCities />
                </Col>
            </Row>
    </Container>
  );
};

export default Cities;