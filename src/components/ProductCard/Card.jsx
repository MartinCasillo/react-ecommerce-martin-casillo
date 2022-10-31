import React from 'react'
import "./card.css";
import {AiOutlineStar} from "react-icons/ai";

function Card(props) {
  return (
    <div className="product text-center col-lg-3 col-md-4 col-12 ">
        <img className="img-fluid mb-3" src={props.imgUrl} alt="Reloj En Venta"/>
        <div className="star">
          <AiOutlineStar className="star" />    
          <AiOutlineStar className="star" />    
          <AiOutlineStar className="star" />    
          <AiOutlineStar className="star" />    
          <AiOutlineStar className="star" />    
        </div>
        <h5 className="p-name">{props.title}</h5>
        <h4 className="p-price">$ {props.price}</h4>
        <button className="buy-btn">COMPRAR AHORA</button>
</div>
  )
}

export default Card