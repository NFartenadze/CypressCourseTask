//Conditional statement
//if hour is between 6 & 12 log "Good Morning"
//if hour is between 12 & 18 log "Good Afternoon"

var hour = 13
if(hour > 6 && hour < 12){
    console.log("Good Morning")
}else if(hour > 12 && hour < 18){
    console.log("Good Afternoon")
}else{
    console.log("Good Evening")
}