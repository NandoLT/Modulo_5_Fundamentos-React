import React from 'react';

import Button from '../../commons/Button';
import FormField from '../../commons/FormField';

import './LoginForm.css';

function LoginForm() {

    const [credentials, setCredentials] = React.useState({
        email:'',
        password:''
    });

    const handleChangeCredentials = event => {
        const newCredentials = {
            ...newCredentials, 
            [event.target.name]: event.target.value,
        };
        setCredentials(newCredentials)
    }

    const {email, password} = credentials
    return (
        <form className="loginForm">
            <FormField
                type="text"
                name="email"
                label="E-mail"
                className="loginForm-field"
                value={email}
                onChange={handleChangeCredentials}
            />
            <FormField
                type="password"
                name="password"
                label="password"
                className="loginForm-field"
                value={password}
                onChange={handleChangeCredentials}
            />
            <Button 
                type="submit"
                className="loginForm-submit"
                variant="primary"
            >
            Log in
            </Button>
        </form>
    );
}

export default LoginForm;