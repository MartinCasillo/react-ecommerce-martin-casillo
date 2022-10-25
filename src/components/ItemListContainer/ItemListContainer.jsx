import React from 'react'
import Card from '../ProductCard/Card'
import products from '../data/Productos'

function ItemListContainer() {
  return (
    <div className="container text-center mt-5 py-5">
      <div className="row mx-auto container-fluid">
      {
        products.map((product)=>(
          <Card 
            imgUrl={product.imgUrl}
            title={product.title}
            price={product.price}
          />
        ))
      }
      </div>
    </div>

);
}

export default ItemListContainer