class Solution {
public:
    int countBinarySubstrings(string s) {
        int curr = 1 , prev = 0, result = 0;
        for(int i=1;i<s.size();i++){
            if(s[i]==s[i-1]) curr++;
            else{
                result += min(prev,curr);
                prev = curr;
                curr = 1;
            }
        }
        result += min(prev,curr);
        return result;
    }
};