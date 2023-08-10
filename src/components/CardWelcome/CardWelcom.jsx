import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './CardWelcome.css'
import { Link as Anchor} from 'react-router-dom';

const CardWelcome = () => {
    return (
        <Card>
          <Card.Body>
            <img className='img-welcome' src='./Mytinerary-icon.png'></img>
            <Card.Text className='title-welcome'>
              Find your perfect trip, designed by insiders who know and love their cities!
            </Card.Text>
            <Anchor to='/cities' className='btn-go-cities btn btn-warning' variant="warning">Go The Best Cities</Anchor>
          </Card.Body>
      </Card>
    );
  };
  
  export default CardWelcome;