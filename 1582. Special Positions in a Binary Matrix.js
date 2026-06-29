/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function(mat) {
    let m = mat.length;
    let n = mat[0].length;

    let rowCount = new Array(m).fill(0);
    let colCount = new Array(n).fill(0);

    // First pass: count 1s
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] === 1) {
                rowCount[i]++;
                colCount[j]++;
            }
        }
    }

    let cnt = 0;

    // Second pass: check special positions
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] === 1 && rowCount[i] === 1 && colCount[j] === 1) {
                cnt++;
            }
        }
    }

    return cnt;
};