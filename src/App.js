import React from 'react';
import { AdvertsPage, NewAdvert, AdvertDetail } from './components/adverts';
import LoginPage from  './components/auth/LoginPage/LoginPage';
import Button from './components/commons/Button';

import './App.css';

function App({isInitiallyLogged}) {

  const [isLogged, setIsLogged] = React.useState(isInitiallyLogged);

  const handleLogin = () => {
    setIsLogged(true)
  }

  const handleLogout = () => {
    setIsLogged(false)
  }

  return (
    <div className="App">
      {/* <Adverts />
      <NewAdvert isLogged={isLogged} onLogout={handleLogout} />
      <AdvertDetail isLogged={isLogged}onLogout={handleLogout} /> 
      <LoginPage onLogin={handleLogin}/>*/}
      {isLogged ? <AdvertsPage isLogged={isLogged} onLogout={handleLogout} /> : <LoginPage onLogin={handleLogin} />}
    </div>
  );
}

export default App;
