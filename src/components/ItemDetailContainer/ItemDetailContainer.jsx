import React, {useState, useEffect} from 'react'
import { getSingleItemsFromAPI } from '../../mockService/mockService';
import ItemDetail from './ItemDetail';



function ItemDetailContainer() {
  const [product,setProduct] = useState([]);

  useEffect(()=>{
      getSingleItemsFromAPI().then((itemsDB)=>{
        console.log(itemsDB);
        setProduct(itemsDB); 
      });
    },[]
  )

  return (
    <ItemDetail product={product}/>
);
}

export default ItemDetailContainer;