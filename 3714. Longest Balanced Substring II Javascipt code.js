/**
 * @param {string} s
 * @return {number}
 */
 function solve(s, tar){
    let maxi = 0;
    let cnt = 1;

    for(let i=1;i<s.length;i++){
        if(s[i] === s[i-1]){
            cnt++;
        }
        else{
            maxi = Math.max(maxi, cnt);
            cnt = 1;
        }
    }

    maxi = Math.max(maxi, cnt);
    return maxi;
}
function solve2(s, tar1, tar2){
    let maxi = 0;
    let cnt1 = 0, cnt2 = 0;

    let mp = new Map();

    for(let i=0;i<s.length;i++){

        // if other character appears reset
        if(s[i] !== tar1 && s[i] !== tar2){
            mp.clear();
            cnt1 = 0;
            cnt2 = 0;
            continue;
        }

        if(s[i] === tar1) cnt1++;
        if(s[i] === tar2) cnt2++;

        // equal count case
        if(cnt1 === cnt2)
            maxi = Math.max(maxi, cnt1 + cnt2);

        let diff = cnt1 - cnt2;

        if(mp.has(diff)){
            maxi = Math.max(maxi, i - mp.get(diff));
        }
        else{
            mp.set(diff, i);
        }
    }
    return maxi;
}
function solve3(s, tar1, tar2, tar3){
    let maxi = 0;

    let mp = new Map();

    let cnt1 = 0, cnt2 = 0, cnt3 = 0;

    for(let i=0;i<s.length;i++){

        if(s[i] === tar1) cnt1++;
        else if(s[i] === tar2) cnt2++;
        else cnt3++;

        if(cnt1 === cnt2 && cnt1 === cnt3)
            maxi = Math.max(maxi, cnt1 + cnt2 + cnt3);

        let diff1 = cnt1 - cnt2;
        let diff2 = cnt1 - cnt3;

        let key = diff1 + "," + diff2;

        if(mp.size !== 0 && mp.has(key)){
            maxi = Math.max(maxi, i - mp.get(key));
        }
        else{
            mp.set(key, i);
        }
    }

    return maxi;
}
var longestBalanced = function(s) {
   
    let maxi = 0;

    // case 1 (single char)
    let a = solve(s,'a');
    let b = solve(s,'b');
    let c = solve(s,'c');

    // case 2 (two char equal)
    let ab = solve2(s,'a','b');
    let bc = solve2(s,'b','c');
    let ac = solve2(s,'a','c');

    // case 3 (three char equal)
    let abc = solve3(s,'a','b','c');

    let alpha = Math.max(a, Math.max(b,c));
    let beta = Math.max(ab, Math.max(bc,ac));
    let gamma = Math.max(alpha, Math.max(beta,abc));

    maxi = Math.max(maxi, gamma);

    return maxi;

};
TC - O(n) , SC- O(n)