import React from 'react';
import CreateAdvertForm from './CreateAdvertForm';
import Layout from '../../layout/Layout';

import './NewAdvert.css';

const NewAdvert = (props) => {

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Envío de formulario');
    }

    return(
        <Layout title="Página de Crear anuncios" {...props}>
            <div className="loginPage">
                <h1 className="loginPage-title">Create New Advert</h1>
                <CreateAdvertForm onSubmit={handleSubmit}/>
                {/* { error && <div className="loginPage-error">{error.message}</div>} */}
            </div>
        </Layout>
    )
}

export default NewAdvert;