import client from './client';

const advertsBaseUrl = '/api/v1/adverts';

export const getAdverts = () => {
    const url = `${advertsBaseUrl}`;
    return client.get(url);
}

export const getAdvertDetail = advertId => {
    const url = `${advertsBaseUrl}/${advertId}`;
    return client.get(url);
}

export const deleteAdvert = advertId => {
    const url =`${advertsBaseUrl}/${advertId}`;
    return client.delete(url);
}

export const getTags = () => {
    const url = `${advertsBaseUrl}/tags`;
    return client.get(url);
}

export const createAdvert = advertData => {
    const url = `${advertsBaseUrl}`;
    return client.post(url, advertData);
}
