import React from 'react';
import { Button } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';

const ItemTarea = () => {
    return (
        <ListGroup.Item className='d-flex justify-content-between'>Tarea 1
            <Button variant='danger'>Borrar</Button>
        </ListGroup.Item>
    );
};

export default ItemTarea;