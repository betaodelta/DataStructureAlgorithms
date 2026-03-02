const n = grid.length;
    const cntZeros = new Array(n).fill(0);

    // Count trailing zeros
    for (let i = 0; i < n; i++) {
        let j = n - 1;
        let cnt = 0;

        while (j >= 0 && grid[i][j] !== 1) {
            j--;
            cnt++;
        }

        cntZeros[i] = cnt;
    }

    let ans = 0;

    for (let i = 0; i < n; i++) {
        let need = n - i - 1;
        let j = i;

        while (j < n && need > cntZeros[j]) j++;

        if (j === n) return -1;

        ans += j - i;

        while (j > i) {
            let temp = cntZeros[j];
            cntZeros[j] = cntZeros[j - 1];
            cntZeros[j - 1] = temp;
            j--;
        }
    }

    return ans;