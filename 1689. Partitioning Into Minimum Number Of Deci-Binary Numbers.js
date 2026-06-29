/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function(n) {
    let maxi = 0;
    for(let i=0;i<n.length;i++){
        let num = n[i]-'0';
        maxi = Math.max(maxi,num);
    }
    return maxi;
};