int minSwaps(vector<vector<int>>& grid) {
        int n = grid.size();
        vector<int>cntZeros(n,0);
        for(int i=0;i<n;i++){
            int j = n-1;
            int cnt = 0;
            while(j>=0 && grid[i][j]!=1){
                j--;
                cnt++;
            }
            cntZeros[i] = cnt;
        }
        int ans = 0;
        for(int i=0;i<n;i++){
            int need = n-i-1;
            int j = i;
            while(j<n && need > cntZeros[j]) j++;
            if(j==n) return -1;
            ans += j-i;
            while(j>i){
                swap(cntZeros[j],cntZeros[j-1]);
                j--;
            }
        }
        return ans;
    }