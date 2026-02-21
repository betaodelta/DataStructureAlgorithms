function countPrimes(n: number): number {
    if(n<=1) return 0;
    let isPrimes:boolean[] = new Array(n).fill(true);
    isPrimes[0] = false , isPrimes[1] = false;
    for(let i=2;i*i<n;i++){
        if(isPrimes[i]===true){
            for(let j=i*i;j<n;j+=i){
                isPrimes[j] = false;
            }
        }
    }
    let cnt:number = 0;
    for(let i=2;i<n;i++){
        if(isPrimes[i]===true) cnt++;
    }
    return cnt;
};