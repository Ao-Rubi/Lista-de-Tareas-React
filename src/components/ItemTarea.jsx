import React from 'react';
import { Button } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';

const ItemTarea = ({tareaCargada}) => {
    const {tarea, _id} = {...tareaCargada}

    console.log(tarea)
    return (
        <ListGroup.Item className='d-flex justify-content-between'>
            {tareaCargada.tarea}
            <Button variant='danger'>Borrar</Button>
        </ListGroup.Item>
    );
};

export default ItemTarea;