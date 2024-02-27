//map==> loops through each element of the array and do the operation that you passed in the call back function and hold the result from each operation in an array and finally returns  you the array.
const numbers=[2,3,4,5,6];
// function doubleIt(num){
//     console.log('num now', num);
//     return num*2;
// }
// const result=numbers.map(doubleIt);
// console.log(result);

// const doubleIt2=n=>n*2;
// const result=numbers.map(doubleIt2);
// console.log(result);

const result2=numbers.map(n=>n*2);
// console.log(result2);


const number =[23,24,25,26,27,28];
number.map((item,index,arr)=>{
    console.log(item,index,arr);
})

