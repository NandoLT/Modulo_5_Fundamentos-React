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

const FiltersNoResults = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <p>We havent adverts withs this parameters</p>
            <p>Try Again.</p>
        </div>
    ) 
};

const AdvertsList = ({adverts, filtersExist, history}) => {
    console.log('BOOLEANO ANUNCIOS', (filtersExist && adverts) )
    
        if ((filtersExist !== false && adverts) || adverts){
            return (
                <div className="adverts-list">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Price</th>
                                <th>Tags</th>
                            </tr>
                        </thead>
                        <tbody>
                            {adverts.map(renderAdvert(history))}
                        </tbody>
                    </table>
                </div>
            )
            
        } else 
        {
            return (
                <FiltersNoResults />
            )  
        }
}

export default AdvertsList;