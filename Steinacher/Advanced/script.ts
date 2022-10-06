class vehicles {
    brand: string;
    model: string;
    ps: number;
    price: number;
    wheelCount: number;
    kilometers: number;
    constructor(brand: string, model: string, ps: number, price: number, wheelCount: number, kilometers: number) {
        this.brand = brand;
        this.model = model;
        this.ps = ps;
        this.price = price;
        this.wheelCount = wheelCount;
        this.kilometers = kilometers;
    }
}

class motorbikes extends vehicles{
    color: string;

    constructor(brand: string, model: string, ps: number, price: number, wheelCount: number, kilometers:number, color:string) {
        super(brand, model, ps, price, wheelCount, kilometers);
        this.color = color;
    }
    printInfo(){
        return `
    <div class="col-4">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <p class="h3">${this.brand}</p>
                <p class="card-text">${this.model}</p>
                <div class="collapse" id="navbarToggleExternalContent${this.brand}">
                    <div class="p-4">
                        <h5>More About ${this.brand}</h5>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Model: ${this.model}</li>
                            <li class="list-group-item">Power:${this.ps}PS</li>
                            <li class="list-group-item">Color:${this.color}</li>
                            <li class="list-group-item">Count of wheels:${this.wheelCount}</li>
                            <li class="list-group-item">Kilometers:${this.kilometers}km</li>
                            <li class="list-group-item">Price:${this.price}</li>
                        </ul>
                    </div>
                </div>
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent${this.brand}" aria-controls="navbarToggleExternalContent${this.brand}" aria-expanded="false" aria-label="Toggle navigation">
                            <a href="#" class="btn btn-primary">Click for more info!</a>
                    </button>
                </div>
            </div>
        </div>
    </div>`;
}
}

class trucks extends vehicles{
    maximalLoad: number;
    constructor(brand: string, model: string, ps: number, price: number, wheelCount: number, kilometers:number, maximalLoad:number) {
        super(brand, model, ps, price, wheelCount, kilometers);
        this.maximalLoad = maximalLoad;
    }
    printInfo(){
            return `
        <div class="col-4">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <p class="h3">${this.brand}</p>
                    <p class="card-text">${this.model}</p>
                    <div class="collapse" id="navbarToggleExternalContent${this.brand}">
                        <div class="p-4">
                            <h5>More About ${this.brand}</h5>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Model: ${this.model}</li>
                                <li class="list-group-item">Power:${this.ps}PS</li>
                                <li class="list-group-item">Maximal Load:${this.maximalLoad}</li>
                                <li class="list-group-item">Count of wheels:${this.wheelCount}</li>
                                <li class="list-group-item">Kilometers:${this.kilometers}km</li>
                                <li class="list-group-item">Price:${this.price}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="container-fluid">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent${this.brand}" aria-controls="navbarToggleExternalContent${this.brand}" aria-expanded="false" aria-label="Toggle navigation">
                                <a href="#" class="btn btn-primary">Click for more info!</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>`
    }
}

let bike1 = new motorbikes("Yamaha", "MT-10", 80, 20000, 2, 12000, "black");
let bike2 = new motorbikes("BMW", "140er", 360, 40000, 2, 0 , "green");
let bike3 = new motorbikes("Harley", "Three Wheeler", 210, 1200, 3, 298000, "brown/black");
let bikeArray: any[] = [bike1, bike2, bike3]
for(let i in bikeArray){
    let bikeHTML = <HTMLSelectElement>document.getElementById("bike");
    bikeHTML.innerHTML+=bikeArray[i].printInfo();
    console.log(bikeArray[i].brand);
}

let truck1 = new trucks("Mercedes-Benz", "ACTROS L", 200, 4000, 6, 500000, 1500);
let truck2 = new trucks("MAN", "TGA-M", 450, 60000, 4, 0, 2000);
let truck3 = new trucks("Scania", "Arocs", 500, 10000, 8, 12000, 4500);

let truckArray: any[] = [truck1, truck2, truck3];
for(let x in truckArray){
    let truckHTML = <HTMLSelectElement>document.getElementById("trucks");
    truckHTML.innerHTML+=truckArray[x].printInfo();
}