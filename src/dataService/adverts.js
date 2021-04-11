import client from './client';

const advertsBaseUrl = '/api/v1';

export const getAdverts = () => {
    const url = `${advertsBaseUrl}/adverts`;
    return client.get(url);
}

export const getAdvertDetail = advertId => {
    const url = `${advertsBaseUrl}/adverts/${advertId}`;
    return client.get(url);
}

export const deleteAdvert = advertId => {
    const url =`${advertsBaseUrl}/adverts/${advertId}`;
    return client.delete(url);
}