import React from 'react';
import FormFilter from '../NewAdvert/CreateAdvertForm';

const AdvertFilter = ({onFilter}) => {
    const textButton = "FILTER";

    const handleSubmit = (advertFields) => {
        onFilter(advertFields)
    }

    return (
        <FormFilter onSubmit={handleSubmit} textButton={textButton}></FormFilter>
    )
}

export default AdvertFilter;