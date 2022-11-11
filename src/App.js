import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import Tittle from './components/TitleContainer/Title.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartContextProvider } from './components/storage/CartContext';

function App() {
  return (
    <div className="App"> 
      <CartContextProvider>
        <BrowserRouter>
            <Tittle  greeting="Reflex Watche's"/>
            <NavBar />    
            <Routes>
              <Route path="/" element={ <ItemListContainer/> }/> 
              <Route path="/category/:categoryid" element={ <ItemListContainer/> }/> 
              <Route path="/detalle/:id" element={ <ItemDetailContainer/> }/> 
              <Route path="*" element={ <h1 className='text-center'>404: Ruta no encontrada</h1>}/>
            </Routes>
        </BrowserRouter>
      </CartContextProvider>  
    </div>
  );
}

export default App;
