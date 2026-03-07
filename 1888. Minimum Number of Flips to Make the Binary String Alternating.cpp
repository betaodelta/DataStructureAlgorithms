class Solution {
public:
    int minFlips(string s) {
        string str = s + s;
        int n = s.size();
        
        int mini = INT_MAX;
        int cnt1 = 0 , cnt2 = 0;
        int i = 0,  j = 0;
        while(j<2*n){
            char expectedChar1 = (j%2==0) ? '1' : '0';
            char expectedChar2 = (j%2!=0) ? '1' : '0';
            if(str[j]!=expectedChar1) cnt1++;
            if(str[j]!=expectedChar2) cnt2++;
            if(j-i+1 > n){
                char expectedChar10 = (i%2==0) ? '1' : '0';
            char expectedChar20 = (i%2!=0) ? '1' : '0';
                if(str[i]!=expectedChar10) cnt1 -= 1;
                if(str[i]!=expectedChar20) cnt2 -= 1;
                i++;
            }
            if(j-i+1==n) mini = min({mini,cnt1,cnt2});
            j++;
        }
        return mini;
    }
};