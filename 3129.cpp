class Solution {
public:
    int dp[201][201][2];
    int MOD = 1e9+7;
    int solve(int zerosleft, int onesleft, bool oneused, int limit){
        if(zerosleft==0 && onesleft==0) return 1;
        int result = 0;
        if(dp[zerosleft][onesleft][oneused]!=-1) return dp[zerosleft][onesleft][oneused];
        if(oneused==true){
            for(int len=1;len<=min(zerosleft,limit);len++){
                result = (result + solve(zerosleft-len,onesleft,false,limit))%MOD;
            }
        }
        else{
            for(int len=1;len<=min(onesleft,limit);len++){
                result = (result +  solve(zerosleft,onesleft-len,true,limit))%MOD;
            }
        }
        return dp[zerosleft][onesleft][oneused] = result;
    }
    int numberOfStableArrays(int zero, int one, int limit) {
        memset(dp,-1,sizeof(dp));
        int val1 = solve(zero,one,true,limit);
        int val2 = solve(zero,one,false,limit);
        return (val1 + val2)%MOD;
    }
};