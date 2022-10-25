import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import Tittle from './components/TittleContainer/Tittle.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';

function App() {
  return (
    <div className="App"> 
      <Tittle  greeting="Reflex Watche's"/>
      <NavBar />    
      <ItemListContainer/>
    </div>
  );
}

export default App;
