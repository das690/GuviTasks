function twoSum(nums, target) {
    let memory = new Map();
    for(let i = 0; i < nums.length; i++) {
        let currentNumber = nums[i];
        let numberNeeded = target - currentNumber;
        if(memory.has(numberNeeded)) {
            return [memory.get(numberNeeded), i];
        }
        memory.set(currentNumber, i);
    }
}
console.log(twoSum([2, 11, 7, 15], 9));