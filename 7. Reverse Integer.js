/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let result = 0;
    const MAX = 2147483647;
    const MIN = -2147483648;
    while(x!=0){
        let rem = x % 10;
        result = result*10 + rem;
        x = Math.trunc(x/10);
    }
    if(result >= MAX|| result <= MIN) return 0;
    return result;
};