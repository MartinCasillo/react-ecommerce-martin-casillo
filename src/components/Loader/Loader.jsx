import React from 'react'
import { DotSpinner } from '@uiball/loaders'


function Loader({size,speed,color}) {
  return (
    <DotSpinner 
        size={size}
        speed={speed} 
        color={color} 
    /> 

  )
}

export default Loader