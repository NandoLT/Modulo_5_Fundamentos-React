import './App.css';
import  Adverts from './components/adverts/Adverts';
import Button from './components/commons/Button';


function App() {
  return (
    <div className="App">
      <Button variant="primary"> Log Out </Button>
      <Adverts />
    </div>
  );
}

export default App;
