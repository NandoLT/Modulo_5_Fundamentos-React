import React from 'react';
import LoginForm from './LoginForm';
import {login} from '../../../dataService/auth';

import './LoginPage.css';

function LoginPage({onLogin}) {

    const handleSubmit = (credentials) => {
        login(credentials).then(onLogin);
    }
    return (
        <div className="loginPage">
            <h1 className="loginPage-title">Nodepop Login</h1>
            <LoginForm onSubmit={handleSubmit}/>
        </div>
    )
}

export default LoginPage;