/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
 function isPrime(n) {
    let primes = new Array(n + 1).fill(true);

    primes[0] = false;
    primes[1] = false;

    for (let i = 2; i * i <= n; i++) {
        if (primes[i] === true) {
            for (let j = i * i; j <= n; j += i) {
                primes[j] = false;
            }
        }
    }

    return primes[n];
}
function popcount(n) {
    let count = 0;
    while (n > 0) {
        count += (n & 1);
        n = n >> 1;
    }
    return count;
}
var countPrimeSetBits = function(left, right) {
    let cnt = 0;

    for (let i = left; i <= right; i++) {
        let val = popcount(i);
        if (isPrime(val)) cnt++;
    }

    return cnt;
};