class Human {
    // constructor(sex) {
    //     this.sex = sex;
    // }
    sex = 'Male';

    // printSex() {
    //     console.log(this.sex);
    // }
    printSex = () => {
        console.log(this.sex);
    }
}

class Person extends Human {
    // constructor(name, sex) {
    //     super(sex);
    //     this.name = name;
    // }
    name = 'Dr. House';

    // printName() {
    //     console.log(this.name);
    // }
    printName = () => {
        console.log(this.name);
    }
}

const person = new Person();

person.printName();
person.printSex();
