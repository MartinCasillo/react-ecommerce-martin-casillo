import React, {useState, useContext} from 'react'
import { ClickCounter } from '../ClickCounter/ClickCounter'
import './itemdetail.css'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import cartContext from '../storage/CartContext'
import { Link } from 'react-router-dom';


function ItemDetail({product}) {
    const [isInCart, setIsInCart] = useState(false)

    const navigate = useNavigate();

    const {addToCart,cart} = useContext(cartContext);

    let itemInCart = cart.find((item) => product.id === item.id);
    let stock = product.stock;
    if (itemInCart) stock -= itemInCart.count;

    const onAddToCart = (count) => {
        Swal.fire({
            title:"Item agregado al carrito!",
            text:"¿Desea ir al carrito?",
            icon:"success",
            confirmButtonText:"OK",
        }).then((result)=>{
            if(result.isConfirmed){
                navigate("/cart")
            }
        })
        const itemForCart={
            ...product,
            count
        }
        
        addToCart(itemForCart)
        
        setIsInCart(true)
    }
  return (
    <>
    <div className="container sproduct my-5 pt-5">
        <div className="row mt-5 mx-5">
            <div className="col-lg-5 col-md-12 col-12">
                <img className="img-fluid w-100 pb-1" src={product.imgUrl}  id="mainImg" alt="Producto Relacionado"/>
                <div className="small-img-group">
                    <div className="small-img-col">
                        <img src="/img/1.jpg" width="100%" className="small-img" alt="Producto Relacionado"/>
                    </div>
                    <div className="small-img-col">
                        <img src="/img/4.jpg" width="100%" className="small-img" alt="Producto Relacionado"/>
                    </div>
                    <div className="small-img-col">
                        <img src="/img/2.jpg" width="100%" className="small-img" alt="Producto Relacionado"/>
                    </div>
                    <div className="small-img-col">
                        <img src="/img/3.jpg" width="100%" className="small-img" alt="Producto Relacionado"/>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
                <h6>Home / T-Shirt</h6>
                <h3 className="py-4">{product.category}</h3>
                <h2>{product.price}</h2>
                <select className="my-3">
                    <option>Select Size</option>
                    <option>XL</option>
                    <option>XXL</option>
                    <option>Small</option>
                    <option>Large</option>
                </select>
                <h4 className="mt-5 mb-5">Product Details</h4>
                <span>{product.detail}</span>
                <br></br>
                {!isInCart ? (
                            <ClickCounter text="Add To Cart" onAddToCart={onAddToCart} stock={stock}/>
                    
                    ) : (
                        <div className='contenedorBoton g-5'>
                            <Link to="/"><button className='botonDetail'>Ir al Catalogo</button></Link>
                            <Link to="/cart"><button className='botonDetail'>Ir al Carrito</button></Link>
                        </div>
                        )   
            } 
            </div>
        </div>
    </div>
    <div id="featured" className="my-5 pb-5">
        <div className="container text-center mt-5 py-5">
            <h3>Related Product</h3>
            <hr className="mx-auto" width="10%"/>
        </div>
        <div className="row mx-auto container-fluid">
            <div className="product text-center col-lg-3 col-md-4 col-12">
                <img className="img-fluid mb-3" src="/img/10.png" alt=""/>
                <h5 className="p-name">Sport Boots</h5>
                <h4 className="p-price">$92.00</h4>
                <button className="buy-btn">Buy Now</button>
            </div>
            <div className="product text-center col-lg-3 col-md-4 col-12">
                <img className="img-fluid mb-3" src="/img/12.jpg" alt=""/>
                <h5 className="p-name">Sport Boots</h5>
                <h4 className="p-price">$92.00</h4>
                <button className="buy-btn">Buy Now</button>
            </div>
            <div className="product text-center col-lg-3 col-md-4 col-12">
                <img className="img-fluid mb-3" src="/img/17.jpg" alt=""/>
                <h5 className="p-name">Sport Boots</h5>
                <h4 className="p-price">$92.00</h4>
                <button className="buy-btn">Buy Now</button>
            </div>
            <div className="product text-center col-lg-3 col-md-4 col-12">
                <img className="img-fluid mb-3" src="/img/4.jpg" alt=""/>
                <h5 className="p-name">Sport Boots</h5>
                <h4 className="p-price">$92.00</h4>
                <button className="buy-btn">Buy Now</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default ItemDetail