let n = parseInt(prompt("Enter a number to check if it is prime or not: "));
console.log(n);
let isPrime = true;
if(n <= 1) {
    isPrime = false;
} else {
    for(let i = 2; i < n; i++) {
        if(n % i === 0){
            isPrime = false;
            break;
        }
    }
}
if(isPrime) {
    console.log("YES");
    alert("Yes, its a prime number");
} else {
    console.log("No");
    alert("No, its not a prime number");
}