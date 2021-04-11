import React from 'react';
import Advert from './Advert';


const handleClick = (history, advertId) => {
    history.push(`/advert/${advertId}`);
}

const renderAdvert = history => advert => (
    <Advert 
        key={advert.id} 
        advert={advert} 
        history={history}
        onClick={() => handleClick(history, advert.id)}
    />
);


const AdvertsList = ({adverts, history}) => {
    return <div className="adverts-container">{adverts.map(renderAdvert(history))}</div>;
}

export default AdvertsList;