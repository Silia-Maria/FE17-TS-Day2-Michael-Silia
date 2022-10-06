class Person {
    name: string;
    age: number;
    jobTitle: string;
    constructor(name: string, age: number, jobTitle: string) {
            this.name = name;
            this.age = age;
            this.jobTitle = jobTitle;
    }
    
    printInfo(){
        return `Hello there, My name is ${this.name} and I am ${this.age} years old, and I am a ${this.jobTitle}`;
    }
}

let me = new Person("Michael", 24, "Programmer");
console.log(me.printInfo());


class Employee extends Person{
    jobLocation: string;
    salary: number;
    
    constructor(name: string, age: number, jobTitle: string, jobLocation: string, salary:number) {
        super(name, age, jobTitle);
            this.name = name;
            this.age = age;
            this.jobTitle = jobTitle;
            this.jobLocation = jobLocation;
            this.salary = salary;
    }
    
    printInfo(){
        return `Hello there, My name is ${this.name} and I am ${this.age} years old, and I am a ${this.jobTitle} and I work in ${this.jobLocation} and i make ${this.salary}€ a month`;
    }
}

let michael = new Employee("Michael Steinacher", 24, "Programmer", "Vienna", 13000);
console.log(michael.printInfo());