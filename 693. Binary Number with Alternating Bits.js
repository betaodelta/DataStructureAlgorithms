/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
    let preval = 2;
    while(n!==0){
        let val = n &1;
        if(preval==val) return false;
        preval = val;
        n >>= 1;
    }
    return true;
};