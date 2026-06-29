function numSteps(s: string): number {
     let cnt: number = 0;

    while (s.length > 1) {
        if (s[s.length - 1] === '0') {
            // divide by 2
            s = s.slice(0, -1);
        } else {
            // add 1 (binary addition)
            let arr: string[] = s.split('');
            let i: number = arr.length - 1;

            while (i >= 0 && arr[i] === '1') {
                arr[i] = '0';
                i--;
            }

            if (i >= 0) {
                arr[i] = '1';
            } else {
                arr.unshift('1');
            }

            s = arr.join('');
        }

        cnt++;
    }

    return cnt;
};