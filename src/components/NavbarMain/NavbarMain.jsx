import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link as Anchor, NavLink } from 'react-router-dom';

import './navbar.css';
import { Fragment } from 'react';


const NavbarMain = ({links}) => {
  return (
        <Navbar>
            <Container >
                <Nav className="me-auto">
                    {
                        links.map((link,indice)=>{
                            return(
                                <Fragment key={indice}>
                                    <Anchor to={link.value} className='mx-2 link-nav my-auto'>{link.content}</Anchor>
                                </Fragment>
                            )    
                        })
                    }
                </Nav>
            </Container>
        </Navbar>
  );
};

export default NavbarMain;