"use strict";
// Advanced Exercise 
// Parent class vehicles
var _a, _b;
const arrVehicles = [];
class Vehicles {
    constructor(name, price, brand, model, wheelCount, image, color) {
        this.currencyFormater = new Intl.NumberFormat("de-AT", {
            style: "currency",
            currency: "EUR",
        });
        this.name = name;
        this.price = price;
        this.brand = brand;
        this.model = model;
        this.wheelCount = wheelCount;
        this.image = image;
        this.color = color;
        arrVehicles.push(this);
    }
}
// Child Classes
// Motorbikes
class Moto extends Vehicles {
    constructor(name, price, brand, model, wheelCount, image, color, wheels) {
        super(name, price, brand, model, wheelCount, image, color);
        this.wheels = wheels;
    }
    printVehiclesMoto() {
        return `<div class="card" style="width: 18rem;">
            <img src="../advanced/images/${this.image}.jpg" class="card-img-top image" alt="...">
            <div class="card-body">
                <h5 class="card-title">${this.name}</h5>
                <p class="card-text">Your dream Vehicle</p>
    
                <div class="collapse" id="navbarToggleExternalContent${this.name}">
                    <div class="p-4">
                        <h5>More About <br> ${this.name}</h5>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Brand: ${this.brand}</li>
                            <li class="list-group-item">Model:${this.model}</li>
                            <li class="list-group-item">Color:${this.color}</li>
                            <li class="list-group-item">Wheels:${this.wheels}</li>
                            <li class="list-group-item">Price:${this.currencyFormater.format(this.price)}</li>
                        </ul>
                    </div>
                </div>
    
    
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent${this.name}" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                            <a href="#" class="btn btn-light">Click for more info!</a>
                      </button>
                </div>
            </div>
        </div>`;
    }
}
//Trucks
class Trucks extends Vehicles {
    constructor(name, price, brand, model, wheelCount, image, color, maxLoad) {
        super(name, price, brand, model, wheelCount, image, color);
        this.maxLoad = maxLoad;
    }
    printVehiclesTruck() {
        return `<div class="card" style="width: 18rem;">
         <img src="../advanced/images/${this.image}.jpg" class="card-img-top image" alt="...">
         <div class="card-body">
             <h5 class="card-title">${this.name}</h5>
             <p class="card-text">Your dream Vehicle</p>
 
             <div class="collapse" id="navbarToggleExternalContent${this.name}">
                 <div class="p-4">
                     <h5>More About <br> ${this.name}</h5>
                     <ul class="list-group list-group-flush">
                         <li class="list-group-item">Brand: ${this.brand}</li>
                         <li class="list-group-item">Model:${this.model}</li>
                         <li class="list-group-item">Color:${this.color}</li>
                         <li class="list-group-item">Color:${this.maxLoad}</li>
                         <li class="list-group-item">Price:${this.currencyFormater.format(this.price)}</li>
                     </ul>
                 </div>
             </div>
 
 
             <div class="container-fluid">
                 <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent${this.name}" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                         <a href="#" class="btn btn-light">Click for more info!</a>
                   </button>
             </div>
         </div>
     </div>`;
    }
}
// Vehicles 
//Moto 
let moto1 = new Moto("Supermoto", 7000, "KTM", "660-SM", 2, "moto1", "orange", "ContiAttack");
let moto2 = new Moto("Duke", 10000, "BMW", "990-AK", 2, "moto2", "black", "ContiAttack3");
let moto3 = new Moto("Kawazaki", 8500, "BMW", "F 900-XR", 2, "moto3", "blue", "RoadAttack2");
//trucks
let truck1 = new Trucks("Actros", 100000, "Mercedes", "880-RS", 4, "truck1", "silver", "2t");
let truck2 = new Trucks("Econic", 150000, "Ford", "QR-33", 4, "truck2", "black", "1,5t");
let truck3 = new Trucks("Unimog", 100000, "BMW", "990-L", 4, "truck3", "red", "2t");
// Loop to print content
for (var vehicle of arrVehicles) {
    if (vehicle.wheelCount == 2) {
        let motoRow = document.getElementById("moto");
        motoRow.innerHTML += (_a = vehicle.printVehiclesMoto) === null || _a === void 0 ? void 0 : _a.call(vehicle);
    }
    else {
        let truckRow = document.getElementById("trucks");
        truckRow.innerHTML += (_b = vehicle.printVehiclesTruck) === null || _b === void 0 ? void 0 : _b.call(vehicle);
    }
}
