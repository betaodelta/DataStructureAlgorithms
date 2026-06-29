/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function(n) {
    let cnt = 0;
    if (n === 0) return 1;

    let num = n;

    while (n > 0) {
        cnt++;
        n = Math.floor(n / 2);
    }

    let maxi = (1 << cnt) - 1;
    return maxi ^ num;
};