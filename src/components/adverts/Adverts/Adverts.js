import React from 'react';
import { getAdverts } from '../../../dataService/adverts'
import Layout from '../../layout/Layout';

import './Adverts.css';

const Adverts = () => {

    const [ adverts, setAdverts ] = React.useState([])


    React.useEffect (() => {
        getAdverts().then(setAdverts);
    }, []);
    // React.useEffect (() => {
    //     getAdverts().then(response => 
    //         setAdverts(response.data));
    // }, []);

    const handleClick = (advert) => {
        alert(`Construyendo enlace a anuncio ${advert}`);
    }

    return(
        <Layout title="Página de anuncios">
            <div className="adverts-container" >
                {adverts.map( advert => (
                        <div className="card advert-card" key={advert.id} onClick={() => handleClick(advert.name)}>
                            <div className="card-content">
                                <div className="media">
                                    <div className="media-content">
                                        <p className="title is-4">{advert.name}</p>
                                        <p className="subtitle is-6">{advert.sale === true ? 'Venta' : 'Compra'}</p>
                                    </div>
                                </div>
                                <div className="content">
                                <p className="title is-4">{advert.price} €</p>
                                </div>
                                <div className="content">
                                {advert.tags.map(tag => (
                                    <span className="tag is-success" key={tag + advert.id}>{tag}</span>
                                ))}
                                </div>
                            </div>
                        </div>
                ))}
            </div>
        </Layout>
    )
}

export default Adverts;