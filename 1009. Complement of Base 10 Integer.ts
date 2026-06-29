function bitwiseComplement(n: number): number {
     let cnt: number = 0;
    if (n === 0) return 1;

    let num: number = n;

    while (n > 0) {
        cnt++;
        n = Math.floor(n / 2);
    }

    let maxi: number = (1 << cnt) - 1;
    return maxi ^ num;
};