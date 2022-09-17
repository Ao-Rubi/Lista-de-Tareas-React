import React from 'react';
import { Button } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';

const ItemTarea = ({tareaCargada, consultarAPI}) => {
    const {tarea, _id} = {...tareaCargada}

    const URL = process.env.REACT_APP_API_SERVER; //llamada a la base de datos

    const handleDelete = async ()=>{
        try {
            const parametro = {
                method: "DELETE"
            }

            const respuesta = await fetch(URL + "/" + _id, parametro)
            console.log(respuesta)

            if (respuesta.status === 200) {
                consultarAPI()
            }

        } catch (error) {
            console.log(error)
        }
    }

    console.log(tarea)
    return (
        <ListGroup.Item className='d-flex justify-content-between'>
            {tareaCargada.tarea}
            <Button variant='danger' onClick={handleDelete}>Borrar</Button>
        </ListGroup.Item>
    );
};

export default ItemTarea;