function containsDuplicate(nums) {
    let mySet = new Set();
    for(let i = 0; i < nums.length; i++) {
        let currentNumber = nums[i];
        if(mySet.has(currentNumber)) {
            return true;
        }
        mySet.add(currentNumber);
    }
    return false;
}
console.log("Test 1:", containsDuplicate([1, 2, 3, 1])); 
console.log("Test 2:", containsDuplicate([1, 2, 3, 4])); 