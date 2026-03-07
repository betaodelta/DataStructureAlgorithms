/**
 * @param {string} s
 * @return {number}
 */
var minFlips = function(s) {
    let str = s + s;
    let n = s.length;

    let mini = Number.MAX_SAFE_INTEGER;
    let cnt1 = 0, cnt2 = 0;
    let i = 0, j = 0;

    while (j < 2 * n) {
        let expectedChar1 = (j % 2 === 0) ? '1' : '0';
        let expectedChar2 = (j % 2 !== 0) ? '1' : '0';

        if (str[j] !== expectedChar1) cnt1++;
        if (str[j] !== expectedChar2) cnt2++;

        if (j - i + 1 > n) {
            let expectedChar10 = (i % 2 === 0) ? '1' : '0';
            let expectedChar20 = (i % 2 !== 0) ? '1' : '0';

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