
import { createContext, useState } from "react";

const cartContext = createContext();

export const CartContextProvider = (props) =>{
    const [cart,setCart] = useState([])

    const itemsInCart = ( ) => {
        let total = 0;
        cart.forEach( itemInCart => {
            total = total + itemInCart.count
        })
        return total;
    }

    
    
    const addToCart = (itemData) => {
        const newCart = [...cart]
        newCart.push(itemData)
        setCart(newCart)
    }
    
    const value = {cart, addToCart, itemsInCart};

    return (
        <cartContext.Provider value={ value }>
            {props.children}
        </cartContext.Provider>
    )
}

export default  cartContext;