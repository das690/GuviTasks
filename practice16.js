function maxProfit(prices) {
    let maxProfit = 0;
    for(let i = 0; i < prices.length; i++) {
        for(let j = i + 1; j < prices.length; j++) {
            let currentProfit = prices[j] - prices[i];
            if(currentProfit > maxProfit) {
                maxProfit = currentProfit;
            }
        }
    }
    return maxProfit;
}
console.log(maxProfit([7, 1, 5, 3, 6, 4]));