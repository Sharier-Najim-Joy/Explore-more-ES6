// data access
const data=[{id:1,name:'xyz',address:'komo na'}]
// console.log(data[0].address);

const product={
   count:5000,
   data:[
    {id:1,name:'lenovo',price:60000},
    {id:2,name:'mac-book',price:160000}
   ]
}
// console.log(product.data[1].price);

const product2={
    count:5002,
    data:{
        one:'x',
        two:'y',
    }
 }
 console.log(product2.data?.two);
 const product3={
    count:5002,
    item:{
        one:'x',
        two:'y',
    }
 }
 console.log(product3.data?.two);