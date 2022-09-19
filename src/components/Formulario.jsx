import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ListaTareas from './ListaTareas';

const Formulario = ({listaTareas, setUpdateComponent}) => {
    // Aqui va la logica
    // Crear un state
    const [tarea, setTarea] = useState("");

    const URL = process.env.REACT_APP_API_SERVER; //llamada a la base de datos

    // Funciones
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (tarea.length > 0) {
            const nuevaTarea = {
                tarea: tarea
            }

            try {
                const respuesta = await fetch(URL, {
                    method: "POST",
                    headers: {
                        "Content-Type":"application/json"
                    },
                    body: JSON.stringify(nuevaTarea)
                })

                if (respuesta.status === 201) {
                    setUpdateComponent(true)
                }
                
            } catch (error) {
                console.log(error)
            }
        }
    }

    const handleDelete = async (_id)=>{
        try {
            const parametro = {
                method: "DELETE"
            }

            const respuesta = await fetch(URL + "/" + _id, parametro)
            console.log(respuesta)

            if (respuesta.status === 200) {
                setUpdateComponent(true);
            }

        } catch (error) {
            console.log(error)
        }
    }

    // Aqui va el Maquetado
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3 d-flex">
                    <Form.Control type="text" placeholder="Ingrese una tarea" onChange={(e) => { setTarea(e.target.value.trimStart()); }} value={tarea}/>

                    <Button className='ms-5' variant="primary" type="submit">
                    Enviar
                    </Button>
                </Form.Group>
            </Form>

            {/* Aqui invoco a la lista de tarea */} 
            <ListaTareas listaTareas={listaTareas} handleDelete={handleDelete}></ListaTareas>
        </div>
    );
};

export default Formulario;