import { initializeApp } from "firebase/app";
import {getFirestore, collection, getDocs} from 'firebase/firestore';
import { doc, getDoc } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCyDHUISDMOY0yxzbKlj6Xn5HO8AMKrZgw",
  authDomain: "ecommercemartincasillo.firebaseapp.com",
  projectId: "ecommercemartincasillo",
  storageBucket: "ecommercemartincasillo.appspot.com",
  messagingSenderId: "1069942851359",
  appId: "1:1069942851359:web:fbea08694d8fe974e4122a"
};

const FirebaseApp = initializeApp(firebaseConfig);

const DB = getFirestore(FirebaseApp);


export function testDatabase(){
    console.log(FirebaseApp);
}

export async function getSingleItemsFromAPI(id){

const docRef = doc(DB, "products", "1");
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
    return {
        ...docSnap.data(),
        id: docSnap.id,
    }
} else {
    console.error("el producto no existe")
}
}



export async function getItemsFromAPI(){
    try{
    
    const collectionProducts = collection(DB,"products")
    
    let respuesta = await getDocs(collectionProducts);

    const products = respuesta.docs.map(docu => {
        return {
            ...docu.data(),
            id: docu.id,
        }
    })

    return (products)

    }catch(error){
        console.error(error)
    }
}