function countBinarySubstrings(s: string): number {
    let curr : number = 1 , prev : number = 0 , result : number = 0;
    for(let i=1;i<s.length;i++){
        if(s[i]==s[i-1]) curr++;
        else{
            result += Math.min(curr,prev);
            prev = curr;
            curr = 1;
        }
    }
    result += Math.min(curr,prev);
    return result;
};