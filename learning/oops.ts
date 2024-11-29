class Person {
    name:string
    age:number
    gender:string

    constructor(name, age, gender) {
        this.name = name
        this.age = age
        this.gender = gender
    }

    getPerson() {
        console.log(this.name,'is', this.age,'years old', this.gender)
    }
}


let personOne = new Person('Naveen', 24, 'male');
personOne.getPerson();

