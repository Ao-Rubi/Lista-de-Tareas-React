import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import ItemTarea from './ItemTarea';

const ListaTareas = ({handleDelete, listaTareas}) => {
    return (
        <div>
            <ListGroup>
                {
                    listaTareas.map((tarea) => {return <ItemTarea key={tarea._id} tareaCargada={tarea} handleDelete={handleDelete}></ItemTarea>})
                }
            </ListGroup>
        </div>
    );
};

export default ListaTareas;