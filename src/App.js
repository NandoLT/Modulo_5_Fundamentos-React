import React from 'react';
import { Adverts, NewAdvert, AdvertDetail } from './components/adverts';
import LoginPage from  './components/auth/LoginPage/LoginPage';
import Button from './components/commons/Button';

import './App.css';

function App() {

  const [isLogged, setIsLogged] = React.useState(false);

  const handleLogin = () => {
    setIsLogged(true)
  }

  return (
    <div className="App">
      {/* <Adverts />
      <NewAdvert isLogged={isLogged}/>
      <AdvertDetail isLogged={isLogged}/> 
      <LoginPage onLogin={handleLogin}/>*/}
      {isLogged ? <Adverts isLogged={isLogged} /> : <LoginPage onLogin={handleLogin} />}
    </div>
  );
}

export default App;
