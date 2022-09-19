import React from 'react';
import Subtitulo from './components/Subtitulo';
import Titulo from './components/Titulo';
import 'bootstrap/dist/css/bootstrap.min.css';
import Formulario from './components/Formulario';
import { useState, useEffect } from 'react';

const App = () => {

    const URL = process.env.REACT_APP_API_SERVER; //llamada a la base de datos

    const [listaTareas, setListaTareas] = useState([]);
    const [updateComponent, setUpdateComponent] = useState(true);

    useEffect(()=>{
        consultarAPI();
        setUpdateComponent(false);
    }, [updateComponent]);

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
            <section className='container my-5'>
                <Titulo comision="c2i"></Titulo>
                <Subtitulo></Subtitulo>   
                <Formulario listaTareas={listaTareas} setUpdateComponent={setUpdateComponent}></Formulario>
            </section>

        </div>
    );
};

export default App;