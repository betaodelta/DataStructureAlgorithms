class Solution {
public:
    bool hasAllCodes(string s, int k) {
       // if(s[0]=='0' && s.size()==1) return false;
        if(s.size() < k) return false;
        unordered_set<string>st;
        for(int i=0;i<=(s.size()-k);i++){
            st.insert(s.substr(i,k));
        }
        return st.size() == 1<<k;
    }
};