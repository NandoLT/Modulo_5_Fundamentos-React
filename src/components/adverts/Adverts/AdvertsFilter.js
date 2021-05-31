import React from 'react';
import FormFilter from '../NewAdvert/CreateAdvertForm';

const AdvertFilter = ({onFilter}) => {
    const textButton = "FILTER";

    // const[dataFilter, setDataFilter] = React.useState([]);

    const handleSubmit = (advertFields) => {
        console.log('DATOS PRODUCTO EN DATAFILTER', advertFields);
        onFilter(advertFields)
    }

    return (
        <FormFilter onSubmit={handleSubmit} textButton={textButton}></FormFilter>
    )
}

export default AdvertFilter;