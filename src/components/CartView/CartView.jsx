import React, {useContext} from 'react';
import {  createBuyOrderFirestoreWithStock } from '../../services/firebase';
import cartContext from '../storage/CartContext';
import './cart.css'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import BuyForm from './BuyForm';

const CartView = () => {
  
    const { cart, clear, totalPriceInCart, removeItem } = useContext(cartContext);

    const navigate = useNavigate()

    if(cart.length === 0) 
    return  <h1 className='text-center my-5'>Tu carrito esta vacio !</h1> ;
        
    
  
 function createBuyOrder(userData){
        
        const buyData = {
            buyer: userData,
            items: cart,
            total: totalPriceInCart(),
            date: new Date()

        }

        createBuyOrderFirestoreWithStock(buyData).then( orderId => {
        
        navigate(`/main`);
        
        Swal.fire({
            title: "Gracias por tu compra !",
            text: "El ID de tu orden de compra es " + orderId.id,
            icon: "success",
        })
        
        clear();
    })
    
    }

    return (
    <div>
        <section id="cart-container" className="container my-5">
            <table width="100%">
                <thead>
                    <tr>
                        <td>Remove</td>
                        <td>Image</td>
                        <td>Product</td>
                        <td>Price</td>
                        <td>Quantity</td>
                        <td>Total</td>
                    </tr>
                </thead>

                <tbody>
                    {
                        cart.map( cartItem => (
                            <tr>
                                <td><button onClick={ () => removeItem() } className="buttonRemover cardButton img-fluid">Remover</button></td>
                                <td><img src={cartItem.imgUrl} alt=""/></td>
                                <td><h5>{cartItem.title}</h5></td>
                                <td><h5>{cartItem.price}</h5></td>
                                <td><p>{cartItem.count}</p></td>
                                <td><h5>{cartItem.count * cartItem.price}</h5></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </section>

        <section id="cart-bottom" className="container">
            <div className="row">
                <div className="coupon col-lg-6 col-md-6 col-12 mb-4">
                    <div>
                        <h5>COUPON</h5>
                        <p>Enter your coupon code if youb have one</p>
                        <input type="text" placeholder="Coupon Code"/>
                        <button>APPLY COUPON</button>
                    </div>
                </div>
                <div className=" total col-lg-6 col-md-6 col-12">
                    <div>
                        <h5>CART TOTAL</h5>
                        <div className="d-flex justify-content-between">
                            <h6>Subtotal</h6>
                            <p>{totalPriceInCart()}</p> 
                            {/* TotalPrice function */}
                        </div>
                        <div className="d-flex justify-content-between">
                            <h6>Impuestos</h6>
                            <p>$ {totalPriceInCart() * 0.21}</p>
                            {/* IVA */}
                        </div>
                        <hr className="second-hr"/>
                        <div className="d-flex justify-content-between">
                            <h6>Total</h6>
                            <p>$ {  totalPriceInCart() * 1.21}</p>
                            {/*  Total Price 
                             IVA */}
                        </div>
                    </div> 
                </div>
            </div>
            <BuyForm onSubmit={createBuyOrder} />
        </section>
    </div>
  )
}

export default CartView