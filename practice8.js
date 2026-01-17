let n = parseInt(prompt("Enter a number to check: "));
let isPrime = true;
if(n <= 1) {
    isPrime = false;
} else {
    for(let i = 2; i < n; i++) {
        if(n % n === 0) {
            isPrime = false;
            break;
        }
    }
}
if(isPrime) {
    alert("Its prime");
} else {
    alert("Its not prime");
}