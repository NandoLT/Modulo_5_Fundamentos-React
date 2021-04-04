import client from './client';

const advertsBaseUrl = '/api/v1';

export const getAdverts = () => {
    const url = `${advertsBaseUrl}/adverts`;
    return client.get(url);
}