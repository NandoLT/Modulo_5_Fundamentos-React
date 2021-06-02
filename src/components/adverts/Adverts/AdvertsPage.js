import React from 'react';
import {getAdverts} from '../../../dataService/adverts';
import Layout from '../../layout/Layout';
import AdvertsList from './AdvertsList';
import {Button} from '../../commons/Button';
import {Link} from 'react-router-dom';
import AdvertFilter from './AdvertsFilter';

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
    const initialState = [];
    const [ adverts, setAdverts ] = React.useState(initialState);
    const [advertsFiltereds, setAdvertFiltereds] = React.useState(initialState)

    React.useEffect (() => {
        getAdverts()
            .then(setAdverts)
    },[]);

    const tagsChecker = (tags, filters) => filters.every( item => tags.includes(item))
    const handleFilter = (dataFilters) => { 

        const productsFiltered = adverts.filter( advert => {
                if(
                    (((dataFilters.name !== "") && (advert.name === dataFilters.name)) || dataFilters.name === "" )
                    &&
                    (((dataFilters.price >= 0) && (advert.price <= 1*dataFilters.price)) || dataFilters.price === 0)
                    &&
                    (((dataFilters.sale !== null) && (advert.sale ===  JSON.parse(dataFilters.sale))) || dataFilters.sale === null )
                    &&
                    (((dataFilters.tags.length !== 0) && (tagsChecker(advert.tags, dataFilters.tags)) || dataFilters.tags.length === 0))
                )
                    {
                        return advert
                    }   
        });
            setAdvertFiltereds(productsFiltered)
    }

    return (
        <Layout title="Página de anuncios" {...props}>
        <AdvertFilter onFilter={handleFilter}></AdvertFilter>
            {adverts.length ? 
                <AdvertsList 
                    adverts= {advertsFiltereds.length === 0 ? adverts : advertsFiltereds} 
                    filtersExist = {advertsFiltereds.length !== 0 ? true : false}
                    history={history}
                /> 
                : 
                <EmptyList />
            }
        </Layout>
    );
};

export default AdvertsPage;