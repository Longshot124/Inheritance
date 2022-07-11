class Person{
    constructor(name,surname,age,){
        this.name  = name;
        this.surname = surname;
        this.age = age;
        
    }
    
}

class Worker extends Person{
    constructor(name,profession,surname,age){
        super(name,surname,age);
        this.profession = profession;
        
    }
    
    info(){
        console.log(`Name: ${this.name}. Surname: ${this.surname}. Age: ${this.age} Profession: ${this.profession}`)
    }
}

let Doctor = new Worker('Aqil','Hesenov','33','Terapevt');
let Security = new Worker('Orxan','Azimov','25','Security');
let Developer = new Worker('Kamran','Qasimov','26','FullStack Developer');

Doctor.info();
Security.info();
Developer.info();