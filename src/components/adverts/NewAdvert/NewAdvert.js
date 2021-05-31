import React from 'react';
import CreateAdvertForm from './CreateAdvertForm';
import Layout from '../../layout/Layout';
import {createAdvert} from '../../../dataService/adverts';

import './NewAdvert.css';

const NewAdvert = ({history, ...props}) => {
    console.log('PROPS NEW ADVERT', props);
    const handleSubmit = async (advertFields) => {
        const advertData = new FormData();
        Object.keys(advertFields).forEach(key => {
            advertFields[key] !== null && advertData.append(key, advertFields[key]);
        });

        try {
            const advertResponse = await createAdvert(advertData);
            console.log(advertResponse);
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
                {/* { error && <div className="loginPage-error">{error.message}</div>} */}
            </div>
        </Layout>
    )
}

export default NewAdvert;