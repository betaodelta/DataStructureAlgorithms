/**
 * @param {number} turnedOn
 * @return {string[]}
 */
 function countBits(n){
    let cnt = 0;
    while(n > 0){
        n = n & (n - 1);
        cnt++;
    }
    return cnt;
}

var readBinaryWatch = function(turnedOn) {
    let ans = [];

    for(let hr = 0; hr <= 11; hr++){
        for(let min = 0; min <= 59; min++){

            if(countBits(hr) + countBits(min) === turnedOn){

                let res = "";

                if(min < 10){
                    res = hr + ":" + "0" + min;
                }
                else{
                    res = hr + ":" + min;
                }

                ans.push(res);
            }
        }
    }

    return ans;
};