const products=[
    {id:1,name:'lenovo',price:65000},
    {id:2,name:'dell',price:55000},
    {id:3,name:'hp',price:50000},
    {id:4,name:'mac',price:165000},
]

const names=products.map(p=>p.name);
// console.log(names);

products.forEach(p => console.log(p.id))

const expensive =products.filter(p=>p.price>55000);
// console.log(expensive);

const affordable =products.find(p=>p.price<65000);
// console.log(affordable);

const total =products.reduce((p,c)=>p+c.price,0);
// console.log(total);