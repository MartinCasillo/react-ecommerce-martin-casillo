import React, {useState, useEffect} from 'react'
import { getItemsFromAPI, getItemsFromAPIByCategory } from '../../services/firebase'
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
        <div className="container mt-3 py-5">
            <h2 className="font-weight-bold">Our Featured</h2>
            <hr/>
            <p>Here you can check out our new products with fair price on rymo</p>
        </div>
      <ItemList productsList={productsList}/>
    </div> 

);
}

export default ItemListContainer