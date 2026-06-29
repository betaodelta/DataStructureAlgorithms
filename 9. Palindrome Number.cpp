class Solution {
public:
    bool isPalindrome(int x) {
        long long revnum = 0;
        int num = x;
        int sign = 1;
        if(num<0) sign=-1;
        if(num>=INT_MAX || num<=INT_MIN) return false;
        while(num!=0){
            int rem = num%10;
            revnum = revnum*10 + rem;
            num/=10;
        }
        if(revnum>=INT_MAX || revnum<=INT_MIN) return false;
        revnum*=sign;
        return revnum==x;
    }
};