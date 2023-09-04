import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import './header.css';
import NavbarMain from '../NavbarMain/NavbarMain';

const links = [
    {value: '/', content: 'Home', id: '1', active: true},
    {value: '/cities', content: 'Cities', id: '2', active: false}
]

const HeaderMain = () => {
  return (
    <header className="app-header">
        <Container className='nav-mytinerary'>
            <Row className='justify-content-between'>
                <Col lg="2" md="2" xs="3">
                    <img className='img-nav' src='./Mytinerary-icon.png'></img>
                </Col>
                <Col lg="6" md="6" xs="1"></Col>
                <Col lg="4" md="4" xs="6" className='d-flex justify-content-end '>
                    <NavbarMain links={links}/>
                    <Button variant="warning" className='mx-1 my-3'>Login</Button>{' '}
                </Col>
            </Row>
        </Container>
    </header>
  );
};

export default HeaderMain;