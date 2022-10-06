var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age, jobTitle) {
        this.name = name;
        this.age = age;
        this.jobTitle = jobTitle;
    }
    Person.prototype.printInfo = function () {
        return "Hello there, My name is ".concat(this.name, " and I am ").concat(this.age, " years old, and I am a ").concat(this.jobTitle);
    };
    return Person;
}());
var me = new Person("Michael", 24, "Programmer");
console.log(me.printInfo());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, age, jobTitle, jobLocation, salary) {
        var _this = _super.call(this, name, age, jobTitle) || this;
        _this.name = name;
        _this.age = age;
        _this.jobTitle = jobTitle;
        _this.jobLocation = jobLocation;
        _this.salary = salary;
        return _this;
    }
    Employee.prototype.printInfo = function () {
        return "Hello there, My name is ".concat(this.name, " and I am ").concat(this.age, " years old, and I am a ").concat(this.jobTitle, " and I work in ").concat(this.jobLocation, " and i make ").concat(this.salary, "\u20AC a month");
    };
    return Employee;
}(Person));
var michael = new Employee("Michael Steinacher", 24, "Programmer", "Vienna", 13000);
console.log(michael.printInfo());
