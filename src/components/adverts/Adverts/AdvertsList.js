import React from 'react';
// import { getAdverts } from '../../../dataService/adverts'
// import Layout from '../../layout/Layout';
import Advert from './Advert';

// import './Adverts.css';

const renderAdvert = advert => <Advert key={advert.id} advert={advert} />;


const AdvertsList = ({adverts}) => {
    // const [ adverts, setAdverts ] = React.useState([])


    // React.useEffect (() => {
    //     getAdverts().then(setAdverts);
    // }, []);

    // const handleClick = (advert) => {
    //     alert(`Construyendo enlace a anuncio ${advert}`);
    // }

    // return(
    //     <Layout title="Página de anuncios" {...props}>
    //         <div className="adverts-container" >
                
    //         </div>
    //     </Layout>
    // )
    // return <ul className="tweetsList">{adverts.map(renderAdvert)}</ul>;
    return <div className="adverts-container">{adverts.map(renderAdvert)}</div>;

}

export default AdvertsList;