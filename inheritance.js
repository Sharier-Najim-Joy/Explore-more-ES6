class Vehicle{
    constructor(name,price){
        this.name=name;
        this.price=price;
    }
    move(){
        console.log('cole na');
    }
}
class Bus extends Vehicle{
    constructor(name,price,seat,ticket){
        super(name,price);
        this.seat=seat;
        this.ticket=ticket;
    }
}
class Truck extends Vehicle{
    constructor(name,price,load){
        super(name,price);
        this.load=load;
    }
}

const x=new Vehicle('bmw','12345')
