import React, {useState, useEffect} from 'react'
import getItemsFromAPI, { getItemsFromAPIByCategory } from '../../mockService/mockService';
import ItemList from './ItemList';
import {useParams} from 'react-router-dom';

function ItemListContainer() {
  const [productsList,setProductList] = useState([]);
  const {categoryid} = useParams()

  useEffect(()=>{
    if (categoryid){
      getItemsFromAPIByCategory(categoryid).then((itemsDB)=>{
        console.log(itemsDB);
        setProductList(itemsDB); 
      });
    }else{
      getItemsFromAPI().then((itemsDB)=>{
        console.log(itemsDB);
        setProductList(itemsDB); 
      });
    }
    },[categoryid]
  )

  return (
    <div className="container text-center mt-5 py-5">
      <ItemList productsList={productsList}/>
    </div> 

);
}

export default ItemListContainer