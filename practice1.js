var x = 0;
if(x > 0) {
    console.log("Positive number");
    if(x > 9) {
        console.log("More than 1 digit number");
    }else{
        console.log("Its a single digit number");
    }
}else if(x < 0){
    console.log("Neagtive number");
    if(x < -9) {
        console.log("More than 1 digit number");
    }else{
        console.log("Its a single digit number");
    }
}else{
    console.log("Its zero");
}