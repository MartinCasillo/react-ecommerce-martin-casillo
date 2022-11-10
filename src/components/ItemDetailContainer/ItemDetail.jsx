import React, {useState} from 'react'
import { ClickCounter } from '../ClickCounter/ClickCounter'
import './itemdetail.css'

function ItemDetail({product}) {
    const [isInCart, setIsInCart] = useState(false)
    const onAddToCart = (count) => {
        alert( `Agregadas ${count} unidades de ${product.title} al carrito`)
    }
  return (
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
            {isInCart ? (
                <button className='mt-5'>Ir al Carrito</button>
                
                ) : (
                    <ClickCounter text="Add To Cart" onAddToCart={onAddToCart} stock={product.stock}/>
                )   
        } 
        </div>
    </div>
</div>
  )
}

export default ItemDetail