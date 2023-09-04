import React, { useEffect, useState } from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';


import Container from 'react-bootstrap/Container';
import { Button, Nav } from 'react-bootstrap';
import CreateCity from '../../components/CreateCity/CreateCity';
import EditCity from '../../components/EditCity/EditCity';
import DeleteCity from '../../components/DeleteCity/DeleteCity';

import './admin.css'


const Admin = () => {

    const [createCity, setCreateCity] = useState(false);
    const [editCity, setEditCity] = useState(true);
    const [deleteCity, setDeleteCity] = useState(true);

    const create = () => {
        setEditCity(true);
        setDeleteCity(true);
        setCreateCity(!createCity);     
    }

    const edit = () => {
        setDeleteCity(true);
        setCreateCity(true);
        setEditCity(!editCity);
    }

    const eliminate = () => {
        setCreateCity(true);
        setEditCity(true);
        setDeleteCity(!deleteCity);
    }


  return (
    <Container className='body-cities my-5 '>
        <ToggleButtonGroup variant="tabs"  type="radio" name="options" defaultValue={1} className='nav-admin ' defaultActiveKey="/home">
            <ToggleButton id="tbg-radio-1" value={1} variant="outline-warning" onClick={create}>Create city</ToggleButton>
            <ToggleButton id="tbg-radio-2" value={2} variant="outline-warning" onClick={edit}>Edit city</ToggleButton>
            <ToggleButton id="tbg-radio-3" value={3} variant="outline-warning" onClick={eliminate}>Delete city</ToggleButton>
        </ToggleButtonGroup>
        <div className={createCity ? "hideCreate" : "showCreate" }>
            <CreateCity ></CreateCity> 
        </div>
        <div className={editCity ? "hideEdit" : "showEdit" } >
            <EditCity ></EditCity> 
        </div>
        <div className={deleteCity ? "hideDelete" : "showDelete" } >
            <DeleteCity ></DeleteCity> 
        </div>
    </Container>
  );
};

export default Admin;