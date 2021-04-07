import client, {configureClient} from './client';

const authBaseUrl = '/api/auth';

export const login = (credentials) => {
    const url = `${authBaseUrl}/login`;
    return client
        .post(url, credentials)
        .then(({accessToken}) => configureClient({accessToken}));
}