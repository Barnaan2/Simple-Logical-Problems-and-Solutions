/*
               SemiPrimeCount  {  By @Barnaan2 deal with it}

Create a semiPrimeCount() function that takes in an integer, n, 
and returns the count of semi-prime numbers from 1 to n, non-inclusive.
 A semi-prime number is a number that is the product of two prime numbers. 
Note that the numbers don’t have to be distinct, 
meaning that 4 is a semi-prime number since it is 2 * 2.
For example,
 semiPrimeCount() called on 10 should return 3 since there are 3 semi-prime numbers from 1-10 (4, 6, 9).
  Remember, it’s non-inclusive!

*/





function semiPrimeCount(n) {
    let pC = [2,3]
    let counter = 0
    if(n<=3){
        return counter
    }
    for(var i = 4; i<= n/2; i++){
        if((i%2 != 0) && (i%3 != 0)){
         pC.push(i)

        }
    }
for(var i =0; i < pC.length; i++){
    for(var j =0; j < pC.length;j++){
        if(pC[i]*pC[j] < n){
          counter ++
        }
    }
    pC[i] = n
   
}
return counter
}

console.log(semiPrimeCount(10))