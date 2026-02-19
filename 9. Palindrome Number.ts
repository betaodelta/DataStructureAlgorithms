function isPalindrome(x: number): boolean {
     let revnum:number = 0;
    let num:number = x;
    let sign:number = 1;

    const INT_MAX:number = 2147483647;
    const INT_MIN:number = -2147483648;

    if(num < 0) sign = -1;

    if(num >= INT_MAX || num <= INT_MIN) return false;

    while(num != 0){
        let rem:number = num % 10;
        revnum = revnum * 10 + rem;
        num = Math.trunc(num / 10);
    }

    if(revnum >= INT_MAX || revnum <= INT_MIN) return false;

    revnum *= sign;

    return revnum === x;
};