import React from 'react'
import './tittle.css'

function Tittle(props) {
  return (
    <div className='container-fluid contenedor-titulo bg-secondary bg-opacity-25'>
        <h1>{props.greeting}</h1>
    </div>
  )
}

export default Tittle