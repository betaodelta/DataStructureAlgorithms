function reverse(x: number): number {
let result:number = 0;
    const MAX:number = 2147483647;
    const MIN:number = -2147483648;
    while(x!=0){
        let rem:number = x % 10;
        result = result*10 + rem;
        x = Math.trunc(x/10);
    }
    if(result >= MAX|| result <= MIN) return 0;
    return result;
};