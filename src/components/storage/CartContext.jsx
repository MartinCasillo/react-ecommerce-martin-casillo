
import { createContext, useState } from "react";

const cartContext = createContext();

export const CartContextProvider = (props) =>{
    const [cart,setCart] = useState([])

    const totalItemsInCart = ( ) => {
        let total = 0;
        cart.forEach( itemInCart => {
            total = total + itemInCart.count
        })
        return total;
    }
    
    const addToCart = (itemData) => {
        
        let itemFound = cart.find( itemInCart => itemInCart.id === itemData.id)
        
        if(itemFound){
            let newCart = cart.map(itemInCart =>{
                if(itemInCart.id === itemData.id){
                    itemInCart.count += itemData.count
                    return itemInCart;
                }
                return itemInCart;
            })
            setCart(newCart)
        }else{
            setCart ( (newCart) => {
                newCart.push(itemData)
                return newCart;
            })
        }
    }
    
    const removeItem = (itemId) => {
        
    }



    const value = {cart, addToCart, totalItemsInCart};

    return (
        <cartContext.Provider value={ value }>
            {props.children}
        </cartContext.Provider>
    )
}

export default  cartContext;