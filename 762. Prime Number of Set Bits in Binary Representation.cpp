 bool isPrime(int n){
        vector<bool>primes(n+1,1);
        primes[0] = 0 , primes[1] = 0;
        for(int i=2;i*i<=n;i++){
            if(primes[i]==1){
                for(int j=i*i;j<=n;j+=i){
                    primes[j] = 0;
                }
            }
        }
        return primes[n];
    }
    int countPrimeSetBits(int left, int right) {
        int cnt = 0;
        for(int i=left;i<=right;i++){
            int val = __builtin_popcount(i);
            if(isPrime(val)) cnt++;
        }
        return cnt;
    }