import React, {useContext} from 'react'
import { AiOutlineShopping } from 'react-icons/ai';
import cartContext from '../storage/CartContext';


function CartWidget() {
  const {totalItemsInCart} = useContext(cartContext);
  
  
  return (
    <>
        <AiOutlineShopping />
        <small>{totalItemsInCart()}</small>
    </>
  )
}

export default CartWidget