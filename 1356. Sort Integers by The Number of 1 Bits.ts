function sortByBits(arr: number[]): number[] {
    function popcount(n:number){
        let cnt:number = 0;
        while(n!==0){
            cnt += n & 1;
            n>>=1;
        }
        return cnt;
    }

    // minheap in JS term
    arr.sort((a,b) => {
        let bitsA:number = popcount(a);
        let bitsB:number = popcount(b);
        if(bitsA !== bitsB){ // compare number of 1 bits
            return bitsA - bitsB;
        }
        return a-b;
    });
    return arr;
};