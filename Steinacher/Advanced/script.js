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
var vehicles = /** @class */ (function () {
    function vehicles(brand, model, ps, price, wheelCount, kilometers) {
        this.brand = brand;
        this.model = model;
        this.ps = ps;
        this.price = price;
        this.wheelCount = wheelCount;
        this.kilometers = kilometers;
    }
    return vehicles;
}());
var motorbikes = /** @class */ (function (_super) {
    __extends(motorbikes, _super);
    function motorbikes(brand, model, ps, price, wheelCount, kilometers, color) {
        var _this = _super.call(this, brand, model, ps, price, wheelCount, kilometers) || this;
        _this.color = color;
        return _this;
    }
    motorbikes.prototype.printInfo = function () {
        return "\n    <div class=\"col-4\">\n        <div class=\"card\" style=\"width: 18rem;\">\n            <div class=\"card-body\">\n                <p class=\"h3\">".concat(this.brand, "</p>\n                <p class=\"card-text\">").concat(this.model, "</p>\n                <div class=\"collapse\" id=\"navbarToggleExternalContent").concat(this.brand, "\">\n                    <div class=\"p-4\">\n                        <h5>More About ").concat(this.brand, "</h5>\n                        <ul class=\"list-group list-group-flush\">\n                            <li class=\"list-group-item\">Model: ").concat(this.model, "</li>\n                            <li class=\"list-group-item\">Power:").concat(this.ps, "PS</li>\n                            <li class=\"list-group-item\">Color:").concat(this.color, "</li>\n                            <li class=\"list-group-item\">Count of wheels:").concat(this.wheelCount, "</li>\n                            <li class=\"list-group-item\">Kilometers:").concat(this.kilometers, "km</li>\n                            <li class=\"list-group-item\">Price:").concat(this.price, "</li>\n                        </ul>\n                    </div>\n                </div>\n                <div class=\"container-fluid\">\n                    <button class=\"navbar-toggler\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#navbarToggleExternalContent").concat(this.brand, "\" aria-controls=\"navbarToggleExternalContent").concat(this.brand, "\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                            <a href=\"#\" class=\"btn btn-primary\">Click for more info!</a>\n                    </button>\n                </div>\n            </div>\n        </div>\n    </div>");
    };
    return motorbikes;
}(vehicles));
var trucks = /** @class */ (function (_super) {
    __extends(trucks, _super);
    function trucks(brand, model, ps, price, wheelCount, kilometers, maximalLoad) {
        var _this = _super.call(this, brand, model, ps, price, wheelCount, kilometers) || this;
        _this.maximalLoad = maximalLoad;
        return _this;
    }
    trucks.prototype.printInfo = function () {
        return "\n        <div class=\"col-4\">\n            <div class=\"card\" style=\"width: 18rem;\">\n                <div class=\"card-body\">\n                    <p class=\"h3\">".concat(this.brand, "</p>\n                    <p class=\"card-text\">").concat(this.model, "</p>\n                    <div class=\"collapse\" id=\"navbarToggleExternalContent").concat(this.brand, "\">\n                        <div class=\"p-4\">\n                            <h5>More About ").concat(this.brand, "</h5>\n                            <ul class=\"list-group list-group-flush\">\n                                <li class=\"list-group-item\">Model: ").concat(this.model, "</li>\n                                <li class=\"list-group-item\">Power:").concat(this.ps, "PS</li>\n                                <li class=\"list-group-item\">Maximal Load:").concat(this.maximalLoad, "</li>\n                                <li class=\"list-group-item\">Count of wheels:").concat(this.wheelCount, "</li>\n                                <li class=\"list-group-item\">Kilometers:").concat(this.kilometers, "km</li>\n                                <li class=\"list-group-item\">Price:").concat(this.price, "</li>\n                            </ul>\n                        </div>\n                    </div>\n                    <div class=\"container-fluid\">\n                        <button class=\"navbar-toggler\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#navbarToggleExternalContent").concat(this.brand, "\" aria-controls=\"navbarToggleExternalContent").concat(this.brand, "\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                                <a href=\"#\" class=\"btn btn-primary\">Click for more info!</a>\n                        </button>\n                    </div>\n                </div>\n            </div>\n        </div>");
    };
    return trucks;
}(vehicles));
var bike1 = new motorbikes("Yamaha", "MT-10", 80, 20000, 2, 12000, "black");
var bike2 = new motorbikes("BMW", "140er", 360, 40000, 2, 0, "green");
var bike3 = new motorbikes("Harley", "Three Wheeler", 210, 1200, 3, 298000, "brown/black");
var bikeArray = [bike1, bike2, bike3];
for (var i in bikeArray) {
    var bikeHTML = document.getElementById("bike");
    bikeHTML.innerHTML += bikeArray[i].printInfo();
    console.log(bikeArray[i].brand);
}
var truck1 = new trucks("Mercedes-Benz", "ACTROS L", 200, 4000, 6, 500000, 1500);
var truck2 = new trucks("MAN", "TGA-M", 450, 60000, 4, 0, 2000);
var truck3 = new trucks("Scania", "Arocs", 500, 10000, 8, 12000, 4500);
var truckArray = [truck1, truck2, truck3];
for (var x in truckArray) {
    var truckHTML = document.getElementById("trucks");
    truckHTML.innerHTML += truckArray[x].printInfo();
}
