import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import ItemTarea from './ItemTarea';

const ListaTareas = (props) => {
    return (
        <div>
            <ListGroup>
                {
                    props.arregloTareas.map((item, position) => {return <ItemTarea key={position} tareaCargada={item} borrarTarea={props.borrarTarea}></ItemTarea>})
                }
            </ListGroup>
        </div>
    );
};

export default ListaTareas;