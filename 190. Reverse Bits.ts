function reverseBits(n: number): number {
    let result: number = 0;
    if(n==0) return 0;
    for(let i=1;i<=32;i++){
        result <<= 1;
        result = result | (n&1);
        n >>= 1;
    }
    return result;
};