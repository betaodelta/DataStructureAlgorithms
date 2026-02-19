/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
     let revnum = 0;
    let num = x;
    let sign = 1;

    const INT_MAX = 2147483647;
    const INT_MIN = -2147483648;

    if(num < 0) sign = -1;

    if(num >= INT_MAX || num <= INT_MIN) return false;

    while(num != 0){
        let rem = num % 10;
        revnum = revnum * 10 + rem;
        num = Math.trunc(num / 10);
    }

    if(revnum >= INT_MAX || revnum <= INT_MIN) return false;

    revnum *= sign;

    return revnum === x;
};