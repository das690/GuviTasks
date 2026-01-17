//Given 3 numbers N , L and R. Print 'yes' if N is between L and R else print 'no'.
let N = parseInt(prompt("Enter 1st no. :"));
let L = parseInt(prompt("Enter 2nd no. :"));
let R = parseInt(prompt("Enter 3rd no. :"));
if(N > L && N < R) {
    console.log("Yes");
} else {
    console.log("No");
}