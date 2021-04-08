import client, {configureClient, resetClient} from './client';
import storage from '../utils/storage';

const authBaseUrl = '/api/auth';

export const login = (credentials) => {
    const url = `${authBaseUrl}/login`;
    return client
        .post(url, credentials)
        .then(({accessToken}) => {
            configureClient({accessToken})
            storage.set('auth', accessToken)
        });
            
}

export const logout = () => {
    return Promise.resolve().then(() => {
        resetClient();
        storage.remove('auth');
    });
};