//Objects

var customer = {
    firstName: 'John',
    lastName: 'Smith',
    cars: ["Volvo", "Toyota", "Subaru"]
}

//Dot notation
customer.firstName = "Bob"
//Bracket notation
customer["lastName"] = "Will"
console.log(`${customer.firstName} ${customer.lastName}`)

//Arrays
var car = ["Volvo", "Toyota", "Subaru"]
car[0] = "Mercedes-Benz"
console.log(car[0])
console.log(customer.cars[1])