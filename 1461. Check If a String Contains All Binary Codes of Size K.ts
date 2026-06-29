function hasAllCodes(s: string, k: number): boolean {
    
    if(s.length < k) return false;
    let set = new Set<string>();

    for(let i=0;i<=s.length-k;i++){
        set.add(s.substring(i,i+k));
    }
    return set.size === 1<<k;

};