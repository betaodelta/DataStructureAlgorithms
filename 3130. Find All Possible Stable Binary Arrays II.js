/**
 * @param {number} zero
 * @param {number} one
 * @param {number} limit
 * @return {number}
 */
var numberOfStableArrays = function(zero, one, limit) {
    const M = 1000000007;

    let t = Array.from({ length: zero + 1 }, () =>
        Array.from({ length: one + 1 }, () => Array(2).fill(0))
    );

    for (let i = 0; i <= Math.min(zero, limit); i++) {
        t[i][0][0] = 1;
    }

    for (let j = 0; j <= Math.min(one, limit); j++) {
        t[0][j][1] = 1;
    }

    for (let i = 0; i <= zero; i++) {
        for (let j = 0; j <= one; j++) {

            if (i === 0 || j === 0) continue;

            t[i][j][1] = (t[i][j - 1][0] + t[i][j - 1][1]) % M;

            if (j - 1 >= limit) {
                t[i][j][1] = (t[i][j][1] - t[i][j - 1 - limit][0] + M) % M;
            }

            t[i][j][0] = (t[i - 1][j][0] + t[i - 1][j][1]) % M;

            if (i - 1 >= limit) {
                t[i][j][0] = (t[i][j][0] - t[i - 1 - limit][j][1] + M) % M;
            }
        }
    }

    return (t[zero][one][0] + t[zero][one][1]) % M;
};