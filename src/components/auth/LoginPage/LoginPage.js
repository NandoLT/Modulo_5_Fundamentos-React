import React from 'react';
import LoginForm from './LoginForm';
import {login} from '../../../dataService/auth';
import Loader from '../../commons/Loader';

import './LoginPage.css';

function LoginPage({onLogin}) {

    const [error, setError] = React.useState(null);

    const [isLoading, setIsLoading] = React.useState(false);

    const handleSubmit = async (credentials) => {
        try {
            setError(null);
            setIsLoading(true);
            await login(credentials);
            onLogin();
        } catch (error) {
            setError(error);
        }finally{
            setIsLoading(false);
        }
    }
    return (
        <>
            { isLoading && <Loader />}
            <div className="loginPage">
                <h1 className="loginPage-title">Nodepop Login</h1>
                <LoginForm onSubmit={handleSubmit} isLoading={isLoading}/>
                { error && <div className="loginPage-error">{error.message}</div>}
            </div>
        </>
    )
}

export default LoginPage;