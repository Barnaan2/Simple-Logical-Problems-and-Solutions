/*
Maximize Stock Trading Profit


Given the daily values of a stock,
 create a function called maxProfitDays() that, 
given a list of integers,
will return the index value of the two elements that 
represent the day on which one should have bought a share 
and the day on which one should have sold a share based on the max profit.

A list of integers will represent the stock price at the beginning or
 “opening bell” of each day for a week. You are required to buy and sell only once.
 You also must buy a stock before selling it.


*/

function maxProfitDays(stockPrices) {
    let max = 0
    let min = 0
    for(var i = 0; i<stockPrices.length;i++){
      if(stockPrices[max] < stockPrices[i])
      {
        max = i
      }
      else if(stockPrices[min] > stockPrices[i])
    {
      min = i
    }
    }
    if(min == max){
        min = 0
        max = 1
      }
    let items = [min,max]
    
    return items;
    }
     console.log(maxProfitDays([17, 11, 60, 25, 150, 75, 31, 120]))