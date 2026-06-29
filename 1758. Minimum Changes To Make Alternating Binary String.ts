function minOperations(s: string): number {
    
    let n:number = s.length;
    let str1:String = "" ,  str2:String = "";
    for(let i=0;i<n;i+=2){
        str1 += "10";
        str2 += "01";
    }
    let val1:number = 0, val2:number = 0;
    for(let i=0;i<n;i++){
        if(s[i]!==str1[i]) val1++;
        if(s[i]!==str2[i]) val2++;
    }
    return Math.min(val1,val2);
};