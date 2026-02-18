class Solution {
public:
    bool hasAlternatingBits(int n) {
        int preval = 2;
        while(n!=0){
            int val = n & 1;
            if(val==preval) return false;
            preval = val;
            n>>=1;
        }
        return true;
    }
};