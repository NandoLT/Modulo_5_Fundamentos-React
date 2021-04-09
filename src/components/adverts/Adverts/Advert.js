import React from 'react';
// import T from 'prop-types';

const Advert = ({advert}) => {

    const handleClick = (productName) => {
        alert(`Construyendo un enlace al detalle para ${productName}`);
    };

    return (
        // {adverts.map( advert => (
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
    // ))};
    );
}

export default Advert;