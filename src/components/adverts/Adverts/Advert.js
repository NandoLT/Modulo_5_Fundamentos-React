import React from 'react';

const Advert = ({advert, history, onClick}) => {
    return (
            <tr key={advert.id} onClick={onClick} className="item-list">
                <th>{advert.name}</th>
                <th>{advert.sale === true ? 'Sell' : 'Buy'}</th>
                <th>{advert.price} €</th>
                <th>
                {advert.tags.map(tag => (
                    <span className="tag is-success" key={tag + advert.id}>{tag}</span>
                ))}
                </th>
            </tr>
    );
}

export default Advert;