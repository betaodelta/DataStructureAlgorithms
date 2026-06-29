function minPartitions(n: string): number {
    let maxi:number = 0;
    for(let i=0;i<n.length;i++){
        let num:number = Number(n[i]);
        maxi = Math.max(maxi,num);
    }
    return maxi;
};