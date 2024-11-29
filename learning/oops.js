var Person = /** @class */ (function () {
    function Person(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    Person.prototype.getPerson = function () {
        console.log(this.name, 'is', this.age, 'years old', this.gender);
    };
    return Person;
}());
var personOne = new Person('Naveen', 24, 'male');
personOne.getPerson();
