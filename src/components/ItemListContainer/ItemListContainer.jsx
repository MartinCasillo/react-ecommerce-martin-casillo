import React, {useState, useEffect} from 'react'
import getItemsFromAPI from '../../mockService/mockService';
import ItemList from './ItemList';


function ItemListContainer() {
  const [productsList,setProductList] = useState([]);

  useEffect(()=>{
      getItemsFromAPI().then((itemsDB)=>{
        console.log(itemsDB);
        setProductList(itemsDB); 
      });
    },[]
  )

  return (
    <div className="container text-center mt-5 py-5">
      <ItemList productsList={productsList}/>
    </div> 

);
}

export default ItemListContainer