import React, {useContext} from 'react';
import cartContext from '../storage/CartContext';


const CartView = () => {
  
    const { cart } = useContext(cartContext);
  
    return (
    <div className='text-center'>
        <h1>Este es el contenido de tu carrito</h1>
        {
            cart.map( cartItem => (
                <div kew={cartItem.id}>
                    <img src={cartItem.imgUrl} alt="imgCarrito"></img>
                    <h3>{cartItem.title}</h3>
                    <h4>{cartItem.price}</h4>
                    <h4>{cartItem.count}</h4>
                </div>
            ))
        }
    </div>
  )
}

export default CartView