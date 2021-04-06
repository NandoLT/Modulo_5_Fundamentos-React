import './App.css';
import  { Adverts, NewAdvert, AdvertDetail } from './components/adverts';
import LoginPage from  './components/auth/LoginPage/LoginPage';
import Button from './components/commons/Button';


function App() {
  return (
    <div className="App">
      {/* <Adverts />
      <NewAdvert />
      <AdvertDetail /> */}
      <LoginPage />
    </div>
  );
}

export default App;
