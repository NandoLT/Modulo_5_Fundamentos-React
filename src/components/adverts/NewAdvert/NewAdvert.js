import React from 'react';
import CreateAdvertForm from './CreateAdvertForm';
import Layout from '../../layout/Layout';
import {createAdvert} from '../../../dataService/adverts';

import './NewAdvert.css';

const NewAdvert = ({history, ...props}) => {
    const handleSubmit = async (advertFields) => {
        const advertData = new FormData();
        Object.keys(advertFields).forEach(key => {
            advertFields[key] !== null && advertData.append(key, advertFields[key]);
        });

        try {
            const advertResponse = await createAdvert(advertData);
            const advertID = advertResponse.id;
            history.push(`/advert/${advertID}`);
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <Layout title="Página de Crear anuncios" {...props}>
            <div className="loginPage">
                <h1 className="loginPage-title">Create New Advert</h1>
                <CreateAdvertForm onSubmit={handleSubmit}/>
            </div>
        </Layout>
    )
}

export default NewAdvert;