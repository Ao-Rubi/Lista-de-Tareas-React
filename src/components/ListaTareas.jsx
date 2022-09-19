import React from 'react';
import { useState, useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import ItemTarea from './ItemTarea';

const ListaTareas = () => {
    const URL = process.env.REACT_APP_API_SERVER; //llamada a la base de datos

    const [listaTareas, setListaTareas] = useState([]);

    useEffect(()=>{
        consultarAPI();
    }, listaTareas);

    const consultarAPI = async ()=>{
        //Peticion get
        try {
            const respuesta = await fetch(URL);
            const listaTareas = await respuesta.json();

            setListaTareas(listaTareas);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <ListGroup>
                {
                    listaTareas.map((tarea) => {return <ItemTarea key={tarea._id} tareaCargada={tarea} consultarAPI={consultarAPI}></ItemTarea>})
                }
            </ListGroup>
        </div>
    );
};

export default ListaTareas;