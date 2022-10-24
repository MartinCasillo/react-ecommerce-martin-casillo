import React from 'react'
import './itemlistcontainer.css'

function ItemListContainer(props) {
  return (
    <div className='container contenedor-titulo'>
        <h1>{props.greeting}</h1>
    </div>
  )
}

export default ItemListContainer