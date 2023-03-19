// User input Month

let a = prompt("Enter the Month");
let month1 = new Date(a);
let months = month1.getMonth();

    if (months <= 3){
        console.log("This is Spring Session");
    }   else if (months <= 7) {
        console.log("This is Summer Session");
    }   else if (months <= 11) {
        console.log("This is Winter");
    }   else {
        console.log("Correct Month enter");
    }