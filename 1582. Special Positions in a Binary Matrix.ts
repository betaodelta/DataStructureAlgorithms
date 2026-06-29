function numSpecial(mat: number[][]): number {
    let m: number = mat.length;
    let n: number = mat[0].length;

    let rowCount: number[] = new Array(m).fill(0);
    let colCount: number[] = new Array(n).fill(0);

    // First pass: count 1s
    for (let i: number = 0; i < m; i++) {
        for (let j: number = 0; j < n; j++) {
            if (mat[i][j] === 1) {
                rowCount[i]++;
                colCount[j]++;
            }
        }
    }

    let cnt: number = 0;

    // Second pass: check special positions
    for (let i: number = 0; i < m; i++) {
        for (let j: number = 0; j < n; j++) {
            if (mat[i][j] === 1 && rowCount[i] === 1 && colCount[j] === 1) {
                cnt++;
            }
        }
    }

    return cnt;
};