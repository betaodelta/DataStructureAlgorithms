function makeLargestSpecial(s: string): string {
   
    let specials: string[] = [];
    let start: number = 0;
    let sum:number = 0;
    for(let i=0;i<s.length;i++){
        sum += (s[i]==='1') ? 1 : -1;
        if(sum===0){
            let inner:string = s.substring(start+1,i);
            specials.push("1"+makeLargestSpecial(inner)+"0");
            start = i+1;
        }
    }
    specials.sort().reverse();
    let result:string = "";
    for(let str of specials){
        result += str;
    }
    return result;

};