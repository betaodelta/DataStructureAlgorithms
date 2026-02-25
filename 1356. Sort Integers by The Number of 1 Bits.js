/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
    function popcount(n){
        let cnt = 0;
        while(n!==0){
            cnt += n & 1;
            n>>=1;
        }
        return cnt;
    }

    // minheap in JS term
    arr.sort((a,b) => {
        let bitsA = popcount(a);
        let bitsB = popcount(b);
        if(bitsA !== bitsB){ // compare number of 1 bits
            return bitsA - bitsB;
        }
        return a-b;
    });
    return arr;
};