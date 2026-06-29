function hasAlternatingBits(n: number): boolean {
    let preval : number = 2;
    while(n!=0){
        let val: number = n & 1;
        if(preval==val) return false;
        preval = val;
        n >>= 1;
    }
    return true;
};