import React from 'react';

const Advert = ({advert, history, onClick}) => {
    return (
            <div className="card advert-card" key={advert.id} onClick={onClick}>
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
    );
}

export default Advert;