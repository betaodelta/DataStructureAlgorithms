/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasAllCodes = function(s, k) {
    if(s.length < k) return false;
    let set = new Set();
    for(let i=0;i<=s.length-k;i++){
        set.add(s.substring(i,i+k));
    }
    return set.size === 1<<k;
};