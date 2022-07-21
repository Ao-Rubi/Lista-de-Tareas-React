import React from 'react';
import Subtitulo from './components/Subtitulo';
import Titulo from './components/Titulo';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <div>
            <section className='container my-5'>
                <Titulo></Titulo>
                <Subtitulo></Subtitulo>   
            </section>

        </div>
    );
};

export default App;