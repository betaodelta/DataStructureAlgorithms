class Solution {
public:
    int countPrimes(int n) {
        if(n<=1) return 0;
        vector<int>isPrimes(n,1);
        isPrimes[0] = 0 , isPrimes[1] = 0;
        for(int i=2;i*i<=n;i++){
            if(isPrimes[i]==1){
                for(int j=i*i;j<n;j+=i){
                    isPrimes[j]=0;
                }
            }
        }
        int cnt = 0;
        for(int i=0;i<n;i++){
            if(isPrimes[i]==1) cnt++;
        }
        return cnt;
    }
};