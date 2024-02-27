class Person{
    constructor(age,name){
        this.age=age;
        this.name=name;
    }
    sleep(){
        console.log(`sleeping now ${this.name}`);
    }
}
const kodom =new Person(21,'kodom ali');
kodom.sleep();
console.log(kodom);