import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ListaTareas from './ListaTareas';

const Formulario = () => {
    return (
        <div>
            <Form>
                <Form.Group className="mb-3 d-flex">
                    <Form.Control type="text" placeholder="Ingrese una tarea" />

                    <Button variant="primary" type="submit">
                    Enviar
                    </Button>
                </Form.Group>
            </Form>

            {/* Aqui invoco a la lista de tarea */}
            <ListaTareas></ListaTareas>
        </div>
    );
};

export default Formulario;