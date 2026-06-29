function minFlips(s: string): number {
    let str: string = s + s;
    let n: number = s.length;

    let mini: number = Number.MAX_SAFE_INTEGER;
    let cnt1: number = 0, cnt2: number = 0;
    let i: number = 0, j: number = 0;

    while (j < 2 * n) {
        let expectedChar1: string = (j % 2 === 0) ? '1' : '0';
        let expectedChar2: string = (j % 2 !== 0) ? '1' : '0';

        if (str[j] !== expectedChar1) cnt1++;
        if (str[j] !== expectedChar2) cnt2++;

        if (j - i + 1 > n) {
            let expectedChar10: string = (i % 2 === 0) ? '1' : '0';
            let expectedChar20: string = (i % 2 !== 0) ? '1' : '0';

            if (str[i] !== expectedChar10) cnt1--;
            if (str[i] !== expectedChar20) cnt2--;
            i++;
        }

        if (j - i + 1 === n) {
            mini = Math.min(mini, cnt1, cnt2);
        }

        j++;
    }

    return mini;
};