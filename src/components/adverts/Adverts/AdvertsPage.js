import React from 'react';
import {getAdverts} from '../../../dataService/adverts';
import Layout from '../../layout/Layout';
import AdvertsList from './AdvertsList';
import {Button} from '../../commons/Button';
import {Link} from 'react-router-dom';

import './Adverts.css';

const EmptyList = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <p>We Need Adverts to get Money!</p>
            <p>Please be the first...</p>
            <Button
            as={Link}
            to="/advert"
                variant="primary"
            >
                New Advert
            </Button>
        </div>
    ) 
};

const AdvertsPage = ({history, location, ...props }) => {
    const initialState = []
    const [ adverts, setAdverts ] = React.useState(initialState);

    React.useEffect (() => {
        getAdverts().then(setAdverts);
    },[]);

    

    return (
        <Layout title="Página de anuncios" {...props}>
            {adverts.length ? <AdvertsList adverts={adverts} history={history}/> : <EmptyList />}
        </Layout>
    );
};

export default AdvertsPage;