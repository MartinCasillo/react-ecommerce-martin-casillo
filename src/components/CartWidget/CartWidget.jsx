import React, {useContext} from 'react'
import { AiOutlineShopping } from 'react-icons/ai';
import cartContext from '../storage/CartContext';


function CartWidget() {
  const {itemsInCart} = useContext(cartContext);
  
  
  return (
    <>
        <AiOutlineShopping />
        <small>{itemsInCart()}</small>
    </>
  )
}

export default CartWidget