import React, {useState, useEffect} from 'react'
import { getSingleItemsFromAPI } from '../../services/firebase';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';

function ItemDetailContainer() {
  const [product,setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true)


  let id = useParams().id


  useEffect(()=>{
      getSingleItemsFromAPI(id).then((itemsDB)=>{
        setProduct(itemsDB); 
        setIsLoading(false)
      })
      .catch((error) => {
        console.error(error)
        setIsLoading(false)
      })
      .finally(() => 
      setIsLoading(false))
    },[id]
  )

  if(isLoading) return <Loader className="text-center" color="#000"></Loader>;

  return (  <ItemDetail product={product}/>
);
}

export default ItemDetailContainer;