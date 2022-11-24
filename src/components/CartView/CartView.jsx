import React, {useContext} from 'react';
import cartContext from '../storage/CartContext';
import './cart.css'


const CartView = () => {
  
    const { cart } = useContext(cartContext);
  
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
                    </div>
                    <div class="d-flex justify-content-between">
                        <h6>Shippping</h6>
                        <p>$225.00</p>
                    </div>
                    <hr class="second-hr"/>
                    <div class="d-flex justify-content-between">
                        <h6>Total</h6>
                        <p>$225.00</p>
                    </div>
                    <button class="ml-auto">PROCEED TO CHECKOUT</button>
                </div> 
            </div>
        </div>
    </section>
    </div>
  )
}

export default CartView