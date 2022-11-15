import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartContextProvider } from './components/storage/CartContext';
import FooterContainer from './components/Footer/FooterContainer';
import CartView from './components/CartView/CartView';

function App() {
  return (
    <div className="App"> 
      <CartContextProvider>
        <BrowserRouter>
            <NavBar />    
            <Routes>
              <Route path="/" element={ <ItemListContainer/> }/> 
              <Route path="/category/:categoryid" element={ <ItemListContainer/> }/> 
              <Route path="/detalle/:id" element={ <ItemDetailContainer/> }/> 
              <Route path="*" element={ <h1 className='text-center'>404: Ruta no encontrada</h1>}/>
              <Route path="/cart" element={<CartView></CartView>} />
            </Routes>
        </BrowserRouter>
        <FooterContainer/>
      </CartContextProvider>  
    </div>
  );
}

export default App;
