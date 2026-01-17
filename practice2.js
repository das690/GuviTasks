const num1 = prompt("enter the 1st number : ");
const num2 = prompt("enter the 2nd number : ");
const num3 = prompt("enter the 3rd number : ");
let greatest;
if(num1 > num2 || num1 > num3){
    greatest = num1;
}else if(num2 > num1 || num2 > num3){
    greatest = num2;
}else if(num3 > num1 || num3 > num2){
    greatest = num3;
}else{
    alert("All the numbers are same");
}
alert("The greatest number between the number is: "+ greatest);