import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ListaTareas from './ListaTareas';

const Formulario = () => {
    // Aqui va la logica
    // Crear un state

    const [arregloTareas, setArregloTareas] = useState([]);
    const [tarea, setTarea] = useState("");

    // const actualizarTarea = (e) => {
    //     // obtener el value del input
    //     // console.log(e.target.value);
    //     // actualizar el state
    //     setTarea(e.target.value.trim());
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("prueba desde submit");
        // Actualizar la lista de tarea
        setArregloTareas([...arregloTareas, tarea]);
        setTarea("");
    }

    const borrarTarea = (nombre)=> {
        let arregloModificado = arregloTareas.filter((valor)=>{return valor !== nombre});
        // actualizar el state
        setArregloTareas(arregloModificado)
    }

    // Aqui va el Maquetado
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3 d-flex">
                    <Form.Control type="text" placeholder="Ingrese una tarea" onChange={(e) => { setTarea(e.target.value.trimStart()); }} value={tarea}/>

                    <Button variant="primary" type="submit">
                    Enviar
                    </Button>
                </Form.Group>
            </Form>

            {/* Aqui invoco a la lista de tarea */} 
            <ListaTareas arregloTareas={arregloTareas} borrarTarea={borrarTarea}></ListaTareas>
        </div>
    );
};

export default Formulario;