import './App.css';
import  { Adverts, NewAdvert, AdvertDetail } from './components/adverts';
import Button from './components/commons/Button';


function App() {
  return (
    <div className="App">
      <Adverts />
      <NewAdvert />
      <AdvertDetail />
    </div>
  );
}

export default App;
