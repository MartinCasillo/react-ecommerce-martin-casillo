import React from 'react'
import Card from '../ProductCard/Card'


function ItemList(props) {
  return (
    <div className="row mx-auto container-fluid">
        {
            props.productsList.map((product)=>(
            <Card
                key={product.id} 
                imgUrl={product.imgUrl}
                title={product.title}
                price={product.price}
                stock={product.stock}
            />
            ))
        }
    </div>
  )
}

export default ItemList