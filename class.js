const products=[
    {id:1,name:'lenovo',price:65000},
    {id:2,name:'dell',price:55000},
    {id:3,name:'hp',price:50000},
    {id:4,name:'mac',price:165000},
]

class Product{
    country='bangladesh';
    constructor(name){
        this.name=name
    }
    speak(talk){
        console.log(`talking now ${talk}`);
    }
}

// const x=new Product('joy');
// console.log(x);

// x.speak('kiso komo na')

class Teacher{
    constructor(name,sub){
        this.name=name;
        this.sub=sub;
    }
    lecture(){
        console.log('teaching now');
    }
}

const khalid=new Teacher('khalid','bangla');
khalid.lecture()
console.log(khalid);
console.log(khalid.sub);