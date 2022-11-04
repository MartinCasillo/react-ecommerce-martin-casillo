import React, {useState, useEffect} from 'react'
import { getSingleItemsFromAPI } from '../../mockService/mockService';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';


function ItemDetailContainer() {
  const [product,setProduct] = useState([]);
  const {id} = useParams()


  useEffect(()=>{
      getSingleItemsFromAPI(id).then((itemsDB)=>{
        // console.log(itemsDB);
        setProduct(itemsDB); 
      });
    },[]
  )

  return (
    <ItemDetail product={product}/>
);
}

export default ItemDetailContainer;