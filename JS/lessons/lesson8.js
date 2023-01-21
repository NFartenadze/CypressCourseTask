//Declarative Functions

function helloWorld(){
    console.log("Hello World!")
}
helloWorld()

//Anonymous function
var hello = function(){
    console.log("Hello Anonymous")
}
hello()

//ES6 Arrow function

var arrow = () => {
    console.log("Arrow Function")
}
arrow()


//Function with arguments
function printAge(age){
    console.log("Age: " + age)
}
printAge(12)

//Function with return

function MulByTwo(number){
    var result = number * 2
    return result 
}
var myResult = MulByTwo(6)
console.log(myResult)

//Importing functions
import {printName} from "../helpers/printHelper.js"
printName("Nika")

//Import everything
import * as helper  from "../helpers/printHelper.js"
helper.printName("bob")