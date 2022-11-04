const itemsDB = [
        {
            id:1,
            title:"Rexlex Onix",
            price: 120,
            imgUrl:"/img/1.jpg",
            stock:20,
            category:"Male",
            detail:"Lorem Ipsum Details Lorem Ipsum"
        },
        {
            id:2,
            title:"Rexlex Tur",
            price: 67,
            imgUrl:"/img/2.jpg",
            stock:12,
            detail:"Lorem Ipsum Details Lorem Ipsum"
        },
        {
            id:3,
            title:"Rexlex Cloch",
            price: 100,
            imgUrl:"/img/3.jpg",
            stock:15,
            category:"Male",
            detail:"Lorem Ipsum Details Lorem Ipsum"
        },
        {
            id:4,
            title:"Rexlex Fit",
            price: 170,
            imgUrl:"/img/4.jpg",
            stock:30,
            category:"Male",
            detail:"Lorem Ipsum Details Lorem Ipsum"
        },
        {
            id:5,
            title:"Rexlex Tich",
            price: 90,
            imgUrl:"/img/5.png", 
            stock:21,
            category:"Male",
            detail:"Lorem Ipsum Details Lorem Ipsum"
        },
        {
            id:6,
            title:"Rexlex Tel",
            price: 99,
            imgUrl:"/img/6.png",
            stock:16,
            category:"Male",
            detail:"Lorem Ipsum Details Lorem Ipsum"
        },
        {
            id:7,
            title:"Rexlex Tuss",
            price: 67,
            imgUrl:"/img/7.png",
            stock:11,
            category:"Male",
            detail:"Lorem Ipsum Details Lorem Ipsum"
        },
        {
            id:8,
            title:"Rexlex Glen",
            price: 67,
            imgUrl:"/img/8.png",
            stock:11,
            category:"Male",
            detail:"Lorem Ipsum Details Lorem Ipsum"
        },
        {
            id:9,
            title:"Rexlex Nilsan",
            price: 67,
            imgUrl:"/img/9.png",
            stock:11,
            category:"Male",
            detail:"Lorem Ipsum Details Lorem Ipsum"
        },
        {
            id:10,
            title:"Rexlex Goben",
            price: 67,
            imgUrl:"/img/10.png",
            stock:11,
            category:"Male",
            detail:"Lorem Ipsum Details Lorem Ipsum"
        },
        {
            id:11,
            title:"Rexlex Lofi",
            price: 67,
            imgUrl:"/img/11.jpg",
            stock:11,
            category:"Male",
            detail:"Lorem Ipsum Details Lorem Ipsum"
        },
        {
            id:12,
            title:"Rexlex Flop",
            price: 67,
            imgUrl:"/img/12.jpg",
            stock:15,
            category:"Male",
            detail:"Lorem Ipsum Details Lorem Ipsum"
        },
        {
            id:13,
            title:"Rexlex Fas",
            price: 67,
            imgUrl:"/img/13.png",
            stock:11,
            category:"Male",
            detail:"Lorem Ipsum Details Lorem Ipsum"
        },
        {
            id:14,
            title:"Rexlex Fer",
            price: 67,
            imgUrl:"/img/14.png",
            stock:11,
            category:"Male",
            detail:"Lorem Ipsum Details Lorem Ipsum"
        },
        {
            id:15,
            title:"Rexlex Sar",
            price: 67,
            imgUrl:"/img/15.png",
            stock:11,
            category:"Women",
            detail:"Lorem Ipsum Details Lorem Ipsum"
        },
        {
            id:16,
            title:"Rexlex Ter",
            price: 67,
            imgUrl:"/img/16.png",
            stock:11,
            category:"Women",
            detail:"Lorem Ipsum Details Lorem Ipsum"
        },
        {
            id:17,
            title:"Rexlex Pol",
            price: 67,
            imgUrl:"/img/17.jpg",
            stock:11,
            category:"Women",
            detail:"Lorem Ipsum Details Lorem Ipsum"
        },
        {
            id:18,
            title:"Rexlex Fop",
            price: 67,
            imgUrl:"/img/18.png",
            stock:11,
            category:"Women",
            detail:"Lorem Ipsum Details Lorem Ipsum"
        },
];


export default function getItemsFromAPI(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(itemsDB);
        },500);
    });
}

export function getSingleItemsFromAPI(id){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let itemRequested = itemsDB.find(
                (item)=>item.id === Number(id))
            if(itemRequested){
                resolve(itemRequested);
            }else{
                reject( new Error("El item no existe."));
            }
            
        },500);
    });
}