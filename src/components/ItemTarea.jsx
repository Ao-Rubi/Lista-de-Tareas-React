import React from 'react';
import { Button } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';

const ItemTarea = ({tareaCargada, handleDelete}) => {
    const {tarea, _id} = {...tareaCargada}

    return (
        <ListGroup.Item className='d-flex justify-content-between'>
            {tarea}
            <Button variant='danger' onClick={()=>handleDelete(_id)}>Borrar</Button>
        </ListGroup.Item>
    );
};

export default ItemTarea;