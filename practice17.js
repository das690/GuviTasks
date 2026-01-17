function maxProfit(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;
    for(let i = 0; i < prices.length; i++) {
        let currentPrice = prices[i];
        if(currentPrice < minPrice) {
            minPrice = currentPrice;
        } else {
            let profit = currentPrice - minPrice;
            if(profit > maxProfit) {
                maxProfit = profit;
            }
        }
    }
    return maxProfit;
}
console.log(maxProfit([7, 1, 5, 3, 6, 4]));