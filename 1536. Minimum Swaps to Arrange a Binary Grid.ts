const n: number = grid.length;
    const cntZeros: number[] = new Array(n).fill(0);

    // Count trailing zeros
    for (let i = 0; i < n; i++) {
        let j: number = n - 1;
        let cnt: number = 0;

        while (j >= 0 && grid[i][j] !== 1) {
            j--;
            cnt++;
        }

        cntZeros[i] = cnt;
    }

    let ans: number = 0;

    for (let i = 0; i < n; i++) {
        let need: number = n - i - 1;
        let j: number = i;

        while (j < n && need > cntZeros[j]) j++;

        if (j === n) return -1;

        ans += j - i;

        while (j > i) {
            [cntZeros[j], cntZeros[j - 1]] = [cntZeros[j - 1], cntZeros[j]];
            j--;
        }
    }

    return ans;