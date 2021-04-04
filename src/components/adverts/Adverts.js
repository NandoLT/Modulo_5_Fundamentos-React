import React from 'react';
import { getAdverts } from '../../dataService/adverts'

const Adverts = () => {

    const [ adverts, setAdverts ] = React.useState([])


    React.useEffect (async () => {
        getAdverts().then(response => console.log(response));
    });

    return(
        <div className="adverts">
            {adverts.map( advert => (
                    <div className="card" key={advert.name}>
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
    )
}

export default Adverts;