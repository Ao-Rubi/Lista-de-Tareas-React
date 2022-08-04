import React from 'react';
import { Button } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';

const ItemTarea = (props) => {
    return (
        <ListGroup.Item className='d-flex justify-content-between'>
            {props.tareaCargada}
            <Button variant='danger' onClick={()=>{props.borrarTarea(props.tareaCargada)}}>Borrar</Button>
        </ListGroup.Item>
    );
};

export default ItemTarea;