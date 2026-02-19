class Solution {
public:
    int reverse(int n) {
        long long result = 0;
        int sign = 1;
        if(n < 0) sign = -1;
        if(n==INT_MIN || n == INT_MAX) return 0;
        while(n!=0){
            long long rem = n % 10;
            result = result*10 + rem;
            n/=10;
        }
        if(result >= INT_MAX || result <= INT_MIN) return 0;
        return result;
    }
};