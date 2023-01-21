//Loops

//For Loop
for (let i = 0; i < 10; i++) {
    console.log(i)
}
var cars = ["Volvo", "Toyota", "Subaru"]

//For Of Loop
for(let car of cars){
    console.log(car)
    if(car == "Toyota"){
        break;
    }
}

//ES6
cars.forEach(car => {
    console.log(car)
})