import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar.js';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';

function App() {
  return (
    <div className="App"> 
      <NavBar />    
      <ItemListContainer  greeting="Bienvenidos a La Cirilla Grill"/>
    </div>
  );
}

export default App;
