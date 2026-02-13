#include<bits/stdc++.h>
using namespace std;
TC-O(n) , SC-(n)

class Solution {
public:
    int solve(string &s, char tar){
        int maxi = 0;
        int cnt = 1;
        for(int i=1;i<s.size();i++){
            if(s[i]==s[i-1]){
                cnt++;
                
            }
            else{
                maxi = max(maxi,cnt);
                cnt=1;
            }
        }
        maxi = max(maxi,cnt);
        return maxi;
    }
    int solve2(string &s, char tar1, char tar2){
        int maxi = 0;
        int cnt1 = 0 , cnt2 = 0;
        unordered_map<int,int>mp;
        
        for(int i=0;i<s.size();i++){
            if(s[i]!=tar1 && s[i]!=tar2){
                mp.clear();
                cnt1 = 0 , cnt2 = 0;
                continue;
            }
            if(s[i]==tar1) cnt1++;
            if(s[i]==tar2) cnt2++;
            if(cnt1==cnt2) maxi = max(maxi,cnt1+cnt2);
            int diff = cnt1 - cnt2;
            if(mp.count(diff)) maxi = max(maxi,i-mp[diff]);
            else mp[diff] = i;
        }
        return maxi;
    }
    int solve3(string &s, char tar1 , char tar2 , char tar3){
        int maxi = 0;
        unordered_map<string,int>mp;
        int cnt1 = 0 , cnt2 = 0, cnt3 = 0;
        
        for(int i=0;i<s.size();i++){
            if(s[i]==tar1){
                cnt1++;
                
            }
            else if(s[i]==tar2){
                cnt2++;
                
            }
            else{
                cnt3++;
                
            }
            if(cnt1==cnt2 && cnt1==cnt3) maxi = max(maxi,cnt1+cnt2+cnt3);
            int diff1 = cnt1-cnt2;
                int diff2 = cnt1 - cnt3;
                string str = to_string(diff1) + "," + to_string(diff2);
                if(mp.size()!=0 && mp.count(str)) maxi = max(maxi,i-mp[str]);
                else mp[str] = i;
        }
        return maxi;
    }
    int longestBalanced(string s) {
        int maxi = 0;
        // case-1
        int a = solve(s,'a');
        int b = solve(s,'b');
        int c = solve(s,'c');

        //case-2;
        int ab = solve2(s,'a','b');
        int bc = solve2(s,'b','c');
        int ac = solve2(s,'a','c');

        //case-3
        int abc = solve3(s,'a','b','c');

        int alpha = max(a,max(b,c));
        int beta = max(ab,max(bc,ac));
        int gamma = max(alpha,max(beta,abc));
        maxi = max(maxi,gamma);
        return maxi;
    }
};