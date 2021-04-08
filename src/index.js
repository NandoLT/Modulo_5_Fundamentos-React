import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import storage from './utils/storage';
import {configureClient} from './dataService/client';

const accessToken = storage.get('auth');
configureClient({ accessToken });

ReactDOM.render(
    <App isInitiallyLogged={!!accessToken}/>, document.getElementById('root')
);
