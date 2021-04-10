import React from 'react';
import { AdvertsPage, NewAdvert, AdvertDetail } from './components/adverts';
import LoginPage from  './components/auth/LoginPage/LoginPage';
import NotFound from './components/commons/NotFound';
import { Switch, Route, Redirect } from 'react-router';
// import Button from './components/commons/Button';

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
      <Switch>
        <Route path="/advert/:advertId" component={AdvertDetail}/>
        <Route path="/advert" component={NewAdvert}/>
        <Route path="/login">
        {({history}) => (
          <LoginPage onLogin={handleLogin} history={history}/>
        )}
        </Route>
        <Route exact path="/"><AdvertsPage isLogged={isLogged} onLogout={handleLogout} /></Route>
        <Route path="/404" component={NotFound}/>
        <Route>
          <Redirect to="/404" />
        </Route>
      </Switch>
      {/* <Adverts />
      <NewAdvert isLogged={isLogged} onLogout={handleLogout} />
      <AdvertDetail isLogged={isLogged}onLogout={handleLogout} /> 
      <LoginPage onLogin={handleLogin}/>*/}
      {/* {isLogged ? 
        <AdvertsPage isLogged={isLogged} onLogout={handleLogout} /> : 
        <LoginPage onLogin={handleLogin} />} */}
    </div>
  );
}

export default App;
