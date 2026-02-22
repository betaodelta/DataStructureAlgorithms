function countTrailingZeros(n:number) {
    let count:number = 0;
    while ((n & 1) === 0) {
        n >>= 1;
        count++;
    }
    return count;
}

function binaryGap(n: number): number {
    n >>= countTrailingZeros(n);

    if (n === 1) return 0;

    let maxGap:number = 0;
    let gap:number = 0;

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