/**
 * @param {number} n
 * @return {number}
 */
 function countTrailingZeros(n) {
    let count = 0;
    while ((n & 1) === 0) {
        n >>= 1;
        count++;
    }
    return count;
}

var binaryGap = function(n) {
    n >>= countTrailingZeros(n);

    if (n === 1) return 0;

    let maxGap = 0;
    let gap = 0;

    while (n > 0) {
        if ((n & 1) === 1) {
            maxGap = Math.max(maxGap, gap);
            gap = 0;
        } else {
            gap++;
        }
        n >>= 1;
    }

    return maxGap + 1;
};