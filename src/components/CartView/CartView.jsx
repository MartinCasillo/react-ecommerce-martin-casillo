import React, {useContext} from 'react';
import { createBuyOrderFirestore } from '../../services/firebase';
import cartContext from '../storage/CartContext';
import './cart.css'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const CartView = () => {
  
    const { cart, clear, removeItem, totalPriceInCart, } = useContext(cartContext);

    const navigate = useNavigate()

    if(cart.length === 0) return <h1>Tu carrito esta vacio !</h1>;
  
 function createBuyOrder(){
        
        const buyData = {
            buyer: {
                name:"Comision 34785",
                phone: "123",
                email: "asdasd@gmail.com"
            },
            items: cart,
            total: totalPriceInCart(),
            date: new Date()

        }

        createBuyOrderFirestore(buyData).then( orderId => {
        clear();
        navigate("/checkout");
        Swal.fire({
            title: "Gracias por tu compra !",
            text: "El ID de tu orden de compra es " + orderId,
            icon: "success",
        })
    })
    
    }

    return (
    <div>
        <section id="cart-container" class="container my-5">
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
                                <td><button>Remover</button></td>
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

        <section id="cart-bottom" class="container">
            <div class="row">
                <div class="coupon col-lg-6 col-md-6 col-12 mb-4">
                    <div>
                        <h5>COUPON</h5>
                        <p>Enter your coupon code if youb have one</p>
                        <input type="text" placeholder="Coupon Code"/>
                        <button>APPLY COUPON</button>
                    </div>
                </div>
                <div class="total col-lg-6 col-md-6 col-12">
                    <div>
                        <h5>CART TOTAL</h5>
                        <div class="d-flex justify-content-between">
                            <h6>Subtotal</h6>
                            <p>$225.00</p> 
                            {/* TotalPrice function */}
                        </div>
                        <div class="d-flex justify-content-between">
                            <h6>Shippping</h6>
                            <p>$225.00</p>
                            {/* IVA */}
                        </div>
                        <hr class="second-hr"/>
                        <div class="d-flex justify-content-between">
                            <h6>Total</h6>
                            <p>$225.00</p>
                            {/*  Total Price 
                             IVA */}
                        </div>
                        <button onClick={ createBuyOrder } class="botonCheckout">PROCEED TO CHECKOUT</button>
                    </div> 
                </div>
            </div>
        </section>
    </div>
  )
}

export default CartView