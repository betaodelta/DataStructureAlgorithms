function isPrime(n:number) {
    let primes:boolean[] = new Array(n + 1).fill(true);

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
function popcount(n:number) {
    let count:number = 0;
    while (n > 0) {
        count += (n & 1);
        n = n >> 1;
    }
    return count;
}
function countPrimeSetBits(left: number, right: number): number {
    let cnt:number = 0;

    for (let i:number = left; i <= right; i++) {
        let val:number = popcount(i);
        if (isPrime(val)) cnt++;
    }

    return cnt;
};