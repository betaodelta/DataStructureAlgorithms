class Solution {
public:
    int bitwiseComplement(int n) {
        int cnt = 0;
        if(n==0) return 1;
        int num = n;
        while(n>0){
            cnt++;
            n /= 2;
        }
        int maxi = (1<<cnt) - 1;
        return maxi ^ num;
    }
};