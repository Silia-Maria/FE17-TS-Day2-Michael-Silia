// Exercise 1
class Person {
    name: string;
    age: number;
    job: string;

    constructor(name: string, age: number, job: string) {
        this.name = name;
        this.age = age;
        this.job = job;
       
    }
    printInfo () {
       return`Hello there, My name is ${this.name} and I am ${this.age} years old and I am a ${this.job}`;
   } 
}

const person1 = new Person ("Walter", 45, "Trucker");
console.log(person1.printInfo());

// Exercise 2

class PersonPlus extends Person {
    salary: number;
    jobLocation: string;

    constructor(name: string, age: number, job: string, salary: number, jobLocation: string) {
        super(name, age, job);
        this.salary = salary;
        this.jobLocation = jobLocation;
    }
    printInfo () {
        return `${super.printInfo()} and I get ${this.salary} every month, and I work in ${this.jobLocation}`
    }
}

const person2 = new PersonPlus ("Walter", 45, "Trucker", 2000, "Wien");
console.log(person2.printInfo());

