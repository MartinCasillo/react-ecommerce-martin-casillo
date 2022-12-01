import { initializeApp } from "firebase/app";
import {getFirestore, collection, getDocs, doc, getDoc, query, where, addDoc, writeBatch, documentId} from 'firebase/firestore';


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

const docRef = doc(DB, "products", id);
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

export async function getItemsFromAPIByCategory(categoryid){
    const productsRef = collection(DB, "products");
    const myQuery = query(productsRef, where("category", "==", categoryid));

    const productsSnapshot = await getDocs(myQuery);

    const products = productsSnapshot.docs.map(docu => {
        return {
            ...docu.data(),
            id: docu.id,
        }
    });
    return products;
}

export async function createBuyOrderFirestore(buyOrderData){

    const collectionRef = collection(DB,"buyorders");
    const docRef = await addDoc(collectionRef, buyOrderData);
    
    return(docRef.id)

}


export async function  createBuyOrderFirestoreWithStock(buyOrderData){

    const collectionProductsRef = collection(DB,"products");
    const collectionOrdersRef = collection(DB,"buyorders");
    const batch = writeBatch(DB)
    // const docRef = await addDoc(collectionRef, buyOrderData);
    // return(docRef.id)

    let arraysId = buyOrderData.items.map( (item) => {
        return item.id;
    } )

    const q = query( collectionProductsRef, where( documentId(), "in", arraysId ))
    
    let products = await getDocs(q)

    products.docs.map(doc => {
        let stockActual = doc.data().stock;
      
        let itemInCart = buyOrderData.items.find( item => item.id === doc.id)
      
        let stockActualizado = stockActual - itemInCart.count;
        
        batch.update(doc.ref, { stock: stockActualizado });
    
        return stockActualizado;
    })

    const docOrderRef = doc(collectionOrdersRef)

    batch.set(docOrderRef, buyOrderData);

    batch.commit();

    return docOrderRef;
}



// export async function exportItemsToFirestore(){
//     const itemsDB = [
//         {
//             id:1,
//             title:"Rexlex Onix",
//             price: 120,
//             imgUrl:"/img/1.jpg",
//             stock:20,
//             category:"Male",
//             detail:"Lorem Ipsum Details Lorem Ipsum"
//         },
//         {
//             id:2,
//             title:"Rexlex Tur",
//             price: 67,
//             imgUrl:"/img/2.jpg",
//             stock:12,
//             detail:"Lorem Ipsum Details Lorem Ipsum"
//         },
//         {
//             id:3,
//             title:"Rexlex Cloch",
//             price: 100,
//             imgUrl:"/img/3.jpg",
//             stock:15,
//             category:"Male",
//             detail:"Lorem Ipsum Details Lorem Ipsum"
//         },
//         {
//             id:4,
//             title:"Rexlex Fit",
//             price: 170,
//             imgUrl:"/img/4.jpg",
//             stock:30,
//             category:"Male",
//             detail:"Lorem Ipsum Details Lorem Ipsum"
//         },
//         {
//             id:5,
//             title:"Rexlex Tich",
//             price: 90,
//             imgUrl:"/img/5.png", 
//             stock:21,
//             category:"Male",
//             detail:"Lorem Ipsum Details Lorem Ipsum"
//         },
//         {
//             id:6,
//             title:"Rexlex Tel",
//             price: 99,
//             imgUrl:"/img/6.png",
//             stock:16,
//             category:"Male",
//             detail:"Lorem Ipsum Details Lorem Ipsum"
//         },
//         {
//             id:7,
//             title:"Rexlex Tuss",
//             price: 67,
//             imgUrl:"/img/7.png",
//             stock:11,
//             category:"Male",
//             detail:"Lorem Ipsum Details Lorem Ipsum"
//         },
//         {
//             id:8,
//             title:"Rexlex Glen",
//             price: 67,
//             imgUrl:"/img/8.png",
//             stock:11,
//             category:"Male",
//             detail:"Lorem Ipsum Details Lorem Ipsum"
//         },
//         {
//             id:9,
//             title:"Rexlex Nilsan",
//             price: 67,
//             imgUrl:"/img/9.png",
//             stock:11,
//             category:"Male",
//             detail:"Lorem Ipsum Details Lorem Ipsum"
//         },
//         {
//             id:10,
//             title:"Rexlex Goben",
//             price: 67,
//             imgUrl:"/img/10.png",
//             stock:11,
//             category:"Male",
//             detail:"Lorem Ipsum Details Lorem Ipsum"
//         },
//         {
//             id:11,
//             title:"Rexlex Lofi",
//             price: 67,
//             imgUrl:"/img/11.jpg",
//             stock:11,
//             category:"Male",
//             detail:"Lorem Ipsum Details Lorem Ipsum"
//         },
//         {
//             id:12,
//             title:"Rexlex Flop",
//             price: 67,
//             imgUrl:"/img/12.jpg",
//             stock:15,
//             category:"Male",
//             detail:"Lorem Ipsum Details Lorem Ipsum"
//         },
//         {
//             id:13,
//             title:"Rexlex Fas",
//             price: 67,
//             imgUrl:"/img/13.png",
//             stock:11,
//             category:"Male",
//             detail:"Lorem Ipsum Details Lorem Ipsum"
//         },
//         {
//             id:14,
//             title:"Rexlex Fer",
//             price: 67,
//             imgUrl:"/img/14.png",
//             stock:11,
//             category:"Male",
//             detail:"Lorem Ipsum Details Lorem Ipsum"
//         },
//         {
//             id:15,
//             title:"Rexlex Sar",
//             price: 67,
//             imgUrl:"/img/15.png",
//             stock:11,
//             category:"Women",
//             detail:"Lorem Ipsum Details Lorem Ipsum"
//         },
//         {
//             id:16,
//             title:"Rexlex Ter",
//             price: 67,
//             imgUrl:"/img/16.png",
//             stock:11,
//             category:"Women",
//             detail:"Lorem Ipsum Details Lorem Ipsum"
//         },
//         {
//             id:17,
//             title:"Rexlex Pol",
//             price: 67,
//             imgUrl:"/img/17.jpg",
//             stock:11,
//             category:"Women",
//             detail:"Lorem Ipsum Details Lorem Ipsum"
//         },
//         {
//             id:18,
//             title:"Rexlex Fop",
//             price: 67,
//             imgUrl:"/img/18.png",
//             stock:11,
//             category:"Women",
//             detail:"Lorem Ipsum Details Lorem Ipsum"
//         },
//     ];  

//     const collectionRef = collection(DB, "products");

//     for(let item of itemsDB){
//         const docRef = await addDoc(collectionRef, item);
//          console.log("Documento creado con el ID " + docRef.id)
//     }

// }