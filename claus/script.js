"use strict";
/* Basic 1:
Create a class constructor named Person that should hold information about name, age,  jobTitle and have a function that will return a string “Hello there, My name is (name) and I am (age) years old, and I am a (jobTitle)” */
class Person {
    constructor(name, age, jobTitle) {
        this.name = name;
        this.age = age;
        this.jobTitle = jobTitle;
    }
    ;
    displayInfo() {
        return `Hello there, My name is ${this.name} and I am ${this.age} years old, and I am a ${this.jobTitle}.`;
    }
}
// let office : Array<Person> = [];
// new Person ("Michael Scott", 40, "Manager");
// new Person ("Dwight Schrute", 35, "Assistant to the Manager");
// new Person ("Jim Halpert", 30, "Sales Person");
// new Person ("Pam Beesly", 29, "Receptionist");
let micheal = new Person("Michael Scott", 40, "Regional Manager");
let dwight = new Person("Dwight Schrute", 35, "Assistant to the Regional Manager");
let jim = new Person("Jim Halpert", 30, "Sales Person");
let pam = new Person("Pam Beesly", 29, "Receptionist");
console.log(pam.displayInfo());
/* Basic 2
Create a class based on the Person class and add some other properties like salary, jobLocation and a function that will call the function that is inside the Person class and add “and I get (salary) every month, and I work in (jobLocation)” */
class DunderMifflin extends Person {
    constructor(name, age, jobTitle, salary, jobLocation) {
        super(name, age, jobTitle);
        this.salary = salary;
        this.jobLocation = jobLocation;
    }
    ;
    displayInfo() {
        return `${super.displayInfo()} I get ${this.salary}$ every month, and I work in ${this.jobLocation}.`;
    }
    ;
}
;
let ryan = new DunderMifflin("Ryan Howard", 24, "CFO", 6000, "New York");
let stanley = new DunderMifflin("Stanley Hudson", 52, "Sales Person", 3500, "Scranton branch");
let kevin = new DunderMifflin("Kevin Malone", 36, "Accountant", 3200, "Scranton branch");
console.log(kevin.displayInfo());
/* Create an App that has to offer four different of types of vehicles and list the vehicle models based on the selected panel. Once the user clicks on some vehicle show its details and possibility to view the price

- Create a Parent Class called Vehicles
- Define properties and methods for the super Class
- Consider the inheritance concept
- Define 2 other Child classes and name them Motorbikes and Trucks
- Based on the personal vehicle performance model, kilometers left, number of seats, fuel type and year of
  production calculate the price once the user clicks on the button "show price" *use your dummy custom formula) */
class Car {
    constructor(model, built, kilometres, ps, img) {
        this.model = model;
        this.built = built;
        this.kilometres = kilometres;
        this.ps = ps;
        this.img = img;
    }
    ;
    displayPrice() {
        return (100000 - this.kilometres + this.built + (this.ps * 3)) + "€";
    }
}
// --------------------------------------------------------------------------------------------- //
class Elektro extends Car {
    constructor(model, built, kilometres, ps, img, battery, reach) {
        super(model, built, kilometres, ps, img);
        this.battery = battery;
        this.reach = reach;
        electroCars.push(this);
    }
    ;
    displayPrice() {
        return (100000 - this.kilometres + this.built + (this.ps * 3)) + 20000 + "€";
    }
}
let electroCars = [];
// new Elektro ("model", built, kilometres, ps, "img", "battery", "reach");
new Elektro("Kia EV6", 2021, 13000, 280, "https://i.auto-bild.de/ir_img/2/9/8/2/8/3/3/_QUA6876-f539ed57aa8c5216.jpg?impolicy=leadteaser", "great", "528km");
new Elektro("Hyundai Ioniq 5", 2020, 22000, 305, "https://i.auto-bild.de/ir_img/2/9/8/2/8/3/3/Ioniq5-045-e0e6b079043970d6.jpg?impolicy=leadteaser", "great", "600km");
new Elektro("Skoda Enyaq iV", 2022, 1250, 265, "https://i.auto-bild.de/ir_img/2/9/8/2/8/3/3/Sko_Enyaq_CBO21-96fa03415ec9f4fb.jpg?impolicy=leadteaser", "top", "536km");
console.table(electroCars);
function printElectro() {
    for (let each of electroCars) {
        document.getElementById("elektro").innerHTML += `
  <div class="col">
  <div class="card h-100 p-2 text-align-center" style="width: 18rem;">
    <img src="${each.img}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${each.model}</h5>
      <p class="card-text">Built in: ${each.built}</p>
      <p class="card-text">Kilometres: ${each.kilometres}</p>
      <p class="card-text">Horsepower: ${each.ps}</p>
      <p class="card-text">Battery: ${each.battery}</p>
      <p class="card-text">Reach: ${each.reach}</p>
      <a href="#" class="btn btn-primary price">Get price</a>
    </div>
  </div>
</div>
`;
    }
}
printElectro();
// --------------------------------------------------------------------------------------------- //
class Hybrid extends Car {
    constructor(model, built, kilometres, ps, img, battery, plugin) {
        super(model, built, kilometres, ps, img);
        this.battery = battery;
        this.plugin = plugin;
        hybridCars.push(this);
    }
    ;
    displayPrice() {
        return (100000 - this.kilometres + this.built + (this.ps * 3)) + 20000 + "€";
    }
    ;
}
;
let hybridCars = [];
// new Hybrid ("model", built, kilometres, ps, "img", "battery", "plugin");
new Hybrid("Toyota Yaris 2020", 2019, 85000, 116, "https://images.prismic.io/shacarlacca/ZGUwNTIwZDgtMzFlMC00YTYxLWI3ZDAtZDI5NzcwOGQ3OGE5__10.jpg?auto=compress%2Cformat&rect=0%2C0%2C1600%2C900&w=1200&h=1200", "great", true);
new Hybrid("VW Golf GTE", 2021, 28000, 305, "https://i.auto-bild.de/ir_img/2/9/8/2/8/3/3/Ioniq5-045-e0e6b079043970d6.jpg?impolicy=leadteaser", "great", false);
new Hybrid("Hyundai Kona Hybrid", 2019, 75000, 141, "https://images.prismic.io/shacarlacca/NTVhZDk5NzMtMmYxNS00ZTNjLTlhMjAtZDI4NDEwM2NiODg4__10.jpg?auto=compress%2Cformat&rect=0%2C0%2C1600%2C900&w=1200&h=1200", "good", true);
function printHybrid() {
    for (let each of hybridCars) {
        document.getElementById("hybrid").innerHTML += `
    <div class="col">
    <div class="card h-100 p-2 text-align-center" style="width: 18rem;">
      <img src="${each.img}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${each.model}</h5>
        <p class="card-text">Built in: ${each.built}</p>
        <p class="card-text">Kilometres: ${each.kilometres}</p>
        <p class="card-text">Horsepower: ${each.ps}</p>
        <p class="card-text">Battery: ${each.battery}</p>
        <p class="card-text">Plugin: ${each.plugin}</p>
        <a href="#" class="btn btn-primary price">Get price</a>
      </div>
    </div>
  </div>
  `;
    }
}
printHybrid();
// --------------------------------------------------------------------------------------------- //
class SUV extends Car {
    constructor(model, built, kilometres, ps, img, loud, idiotic) {
        super(model, built, kilometres, ps, img);
        this.loud = loud;
        this.idiotic = idiotic;
        suvCars.push(this);
    }
    ;
    displayPrice() {
        return "Intelligence has no price.";
    }
    ;
}
;
let suvCars = [];
// new SUV ("model", built, kilometres, ps, "img", "loud", "idiotic");
new SUV("Audi e-tron Sportback 55 S", 2019, 58000, 408, "https://assets.adac.de/image/upload/ar_16:9,c_fill,f_auto,g_auto,q_auto:eco,w_2088/v1/Autodatenbank/Fahrzeugbilder/im05957-0-audi-e-tron.jpg", true, true);
new SUV("BMW X5 xDrive30d", 2021, 3000, 265, "https://assets.adac.de/image/upload/ar_16:9,c_fill,f_auto,g_auto,q_auto:eco,w_2088/v1/Autodatenbank/Fahrzeugbilder/im05539-0-bmw-x5.jpg", true, false);
new SUV("Mercedes-Benz GLE", 2019, 90000, 330, "https://assets.adac.de/image/upload/ar_16:9,c_fill,f_auto,g_auto,q_auto:eco,w_2088/v1/Autodatenbank/Fahrzeugbilder/im05973-1-mercedes-gle-klasse.jpg", true, true);
function printSuv() {
    for (let each of suvCars) {
        document.getElementById("suv").innerHTML += `
    <div class="col">
    <div class="card h-100 p-2" style="width: 18rem;">
      <img src="${each.img}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${each.model}</h5>
        <p class="card-text">Built in: ${each.built}</p>
        <p class="card-text">Kilometres: ${each.kilometres}</p>
        <p class="card-text">Horsepower: ${each.ps}</p>
        <p class="card-text">Loud: ${each.loud}</p>
        <p class="card-text">Idiotic: ${each.idiotic}</p>
        <a href="#" class="btn btn-primary price">Get price</a>
      </div>
    </div>
  </div>
  `;
    }
}
printSuv();
// --------------------------------------------------------------------------------------------- //
const priceBtn = document.getElementsByClassName("price");
for (let each of priceBtn) {
    each.addEventListener("click", showPrice);
}
;
function showPrice() {
    alert("Das sollte der Preis stehen");
}
;
// function showPrice(event) {
//   let target = event.target
//   let element = document.getElementsByClassName("price");
//   alert("Das sollte der Preis stehen");
//   element.innerHTML = target.innerHTML; 
// };
// priceBtn.array.forEach(element => {
//   element.addEventListener("click", showPrice);
// });
