import React from 'react';
import { AdvertsPage, NewAdvert, AdvertDetail } from './components/adverts';
import LoginPage from  './components/auth/LoginPage/LoginPage';
import NotFound from './components/commons/NotFound';
import { Switch, Route, Redirect } from 'react-router';
import PrivateRoute from './components/auth/PrivateRoute/PrivateRoute';

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
        <PrivateRoute 
          isLogged={isLogged}
          path="/advert/:advertId" 
          component={AdvertDetail}
        />
        <PrivateRoute 
          isLogged={isLogged} 
          path="/advert" 
          component={NewAdvert}
        />
        <Route path="/login">
        {({history, location}) => (
          <LoginPage onLogin={handleLogin} history={history}/>
        )}
        </Route>
        <Route exact path="/">
          {({history, location}) => (
            <AdvertsPage 
              isLogged={isLogged} 
              onLogout={handleLogout} 
              history={history} 
              location={location}
            />
          )}
        </Route>
        <Route path="/404" component={NotFound}/>
        <Route>
          <Redirect to="/404" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
