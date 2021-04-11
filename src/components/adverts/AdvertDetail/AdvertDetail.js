import React from 'react';
import Layout from '../../layout/Layout';
import {getAdvertDetail} from '../../../dataService/adverts';
import {deleteAdvert} from '../../../dataService/adverts';
import Detail from './Detail';
import Loader from '../../commons/Loader';
import ConfirmDelete from './ConfirmDelete';
import { Redirect } from 'react-router-dom';

import './AdvertDetail.css';

const AdvertDetail = ({history,...props}) => {

    const [advertDetail, setAdvertDetail] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    const [confirmDelete, setConfirmDelete ] = React.useState(false);
    const {match} = props;
    const advertId = match.params.advertId 

    const handleDelete = () => {
        console.log(advertId);
        setIsLoading(true);
        deleteAdvert(advertId)
            .then(
                setTimeout(() => {
                    history.push('/')
                },1000)
            )
            .catch(error => {
                console.log(error);
            })
            .finally(
                setIsLoading(false)
            );
    }

    const handleConfirm = (advertId) => {
        setConfirmDelete(!confirmDelete);

    }

    React.useEffect(() => {
        const {match} = props;
        getAdvertDetail(match.params.advertId)
            .then(advert => { 
                setAdvertDetail(advert)
            })
            .catch(error => {
                setError(error);
            })
            .finally(
                setIsLoading(false)
            );
    },[]);
    

    return ( 
        <Layout title="Página de anuncios" {...props}>
            {error && error.status === 404 ? 
                <Redirect to="/404" /> 
                : 
                !!advertDetail ? 
                <>
                    <Detail advert={advertDetail} onConfirm={() => handleConfirm()}/>
                    <ConfirmDelete confirmDelete={confirmDelete} onConfirm={handleConfirm} onDelete={() => handleDelete()}/>
                </>
                    :
                    <Loader /> 
            } 
        </Layout>
    )
}

export default AdvertDetail;