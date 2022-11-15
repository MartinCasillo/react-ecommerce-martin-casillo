import React from 'react'
import Loader from '../Loader/Loader';
import Card from '../ProductCard/Card'


function ItemList(props) {
  let emptyArray = props.productsList.length === 0;

  return (
    <div className="row mx-auto container-fluid">
        
        {
        emptyArray?
        <Loader color="black"/>
        :
            props.productsList.map((product)=>(
            <Card
                key={product.id} 
                imgUrl={product.imgUrl} 
                title={product.title}
                price={product.price}
                stock={product.stock}
                id={product.id}
            />
            ))
        }
    </div>
  )
}

export default ItemList