import { Col, Row } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';

import './accordion.css';

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

function AccordionCity(props) {
  const { tineraries } = props.data;
  console.log(tineraries)
  return (
    tineraries &&
    <Accordion defaultActiveKey="0">
      <Card className='p-0'>
        <Card.Header>
          <CustomToggle eventKey="1">Click me!</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            <Row>
                {tineraries.map(t =>
                <Col lg="4" xs="4" className='tinerary'>
                  <Card.Body>
                    <Card.Img variant="top" src={t.img} />
                    <Card.Title>{t.title}</Card.Title>
                    <Card.Text>{t.info}</Card.Text>
                  </Card.Body>
                </Col>
              )}
              
            </Row>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

export default AccordionCity;