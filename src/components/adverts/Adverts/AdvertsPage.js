import React from 'react';
import {getAdverts} from '../../../dataService/adverts';
import Layout from '../../layout/Layout';
import AdvertsList from './AdvertsList';
import {Button} from '../../commons/Button';

import './Adverts.css';

const EmptyList = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <p>We Need Adverts to get Money!</p>
            <p>Please be the first...</p>
            <Button
            // as={Link}
            // to="/tweet"
                variant="primary"
            >
                New Advert
            </Button>
        </div>
    ) 
};

const AdvertsPage = ({...props }) => {

    const [ adverts, setAdverts ] = React.useState([]);

    React.useEffect (() => {
        getAdverts().then(setAdverts);
    }, []);

    return (
        <Layout title="Página de anuncios" {...props}>
            {/* <div className={classnames(scopedStyles.tweetsPage, className)}> */}
                {adverts.length ? <AdvertsList adverts={adverts} /> : <EmptyList />}
            {/* </div> */}
        </Layout>
    );
};

export default AdvertsPage;