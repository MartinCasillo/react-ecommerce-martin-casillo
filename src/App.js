import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import Tittle from './components/TitleContainer/Title.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App"> 
      <BrowserRouter>
          <Tittle  greeting="Reflex Watche's"/>
          <NavBar />    
          <Routes>
            <Route path="/" element={ <ItemListContainer/> }/> 
            <Route path="/category/:categoryid" element={ <ItemListContainer/> }/> 
            <Route path="/detalle/:id" element={ <ItemDetailContainer/> }/> 
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
