int minOperations(string s) {
        int n = s.size();
        string str1 = "" , str2 = "";
        for(int i=0;i<n;i+=2){
            str1 +="10";
            str2 += "01";
        }
        int val1 = 0 , val2 = 0;
        for(int i=0;i<n;i++){
            if(s[i]!=str1[i]) val1++;
            if(s[i]!=str2[i]) val2++;
        }
        return min(val1,val2);
    }