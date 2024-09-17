function car(name,maker,engine){
    this.name=name;
    this.maker=maker;
    this.engine=engine;
}
let user1 = new car("Nexon","Tata","2024cc");
console.log(user1.name, maker, engine);
console.log(user1.maker);
console.log(user1.engine);


class information {
    constructor(name, age, city){
        this.name = name;
        this.age = age;
        this.city = city;
    }
}
let details = new information ("Bhargav", "24", "hyderabad")
console.log(information.name);

let obj=newobject();
obj.name="bhargav";
obj.age="24";
obj.city="hyderabad";
console.log(obj)