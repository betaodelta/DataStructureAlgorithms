/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    if(n<=1) return 0;
    let isPrimes = new Array(n).fill(1);
    isPrimes[0] = 0 , isPrimes[1] = 0;
    for(let i=2;i*i<n;i++){
        if(isPrimes[i]===1){
            for(let j=i*i;j<n;j+=i){
                isPrimes[j] = 0;
            }
        }
    }
    let cnt = 0;
    for(let i=2;i<n;i++){
        if(isPrimes[i]===1) cnt++;
    }
    return cnt;
};