if (n === 1) return '0';

    let val: number = (1 << n) - 1;
    let mid: number = Math.floor((val + 2 - 1) / 2);

    if (mid === k) return '1';
    else if (mid > k) {
        return findKthBit(n - 1, k);
    } else {
        let ch: string = findKthBit(n - 1, val - (k - 1));
        return ch === '0' ? '1' : '0';
    }