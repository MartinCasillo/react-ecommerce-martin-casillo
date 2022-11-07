import React, {useState} from 'react';
import './clickcounter.css';

export const ClickCounter = ({stock}) => {
  
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
    </div>
  )
}
