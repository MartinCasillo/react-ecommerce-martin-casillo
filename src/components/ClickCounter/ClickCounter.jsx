import React, {useState} from 'react';
import './clickcounter.css';
import '../ItemDetailContainer/itemdetail.css';

export const ClickCounter = ({stock,onAddToCart,text}) => {
  
    const [ cantidad , setCantidad ] = useState(1)
  
    function handleIncrement(){
        if( cantidad < stock ){
            setCantidad( cantidad + 1 );
        }
    }
    function handleDecrement(){
        if( cantidad > 1 ){
            setCantidad( cantidad - 1)
        }
    }

    return (
    <div className='buttonContenedor'>
        <button className='buttonDecrement' onClick={handleDecrement}>-</button>
        <p>{cantidad}</p>
        <button className='buttonIncrement' onClick={handleIncrement}>+</button>
        <br></br>
        <button onClick={ () => onAddToCart(cantidad)} className="buy-btn">{text}</button>
    </div>
  )
}
