class Solution {
public:
    vector<int> sortByBits(vector<int>& arr) {
        priority_queue<pair<int,int>,vector<pair<int,int>>,greater<pair<int,int>>>pq;
        for(auto &i : arr){
            pq.push({__builtin_popcount(i),i});
        }
        vector<int>ans;
        while(pq.size()!=0){
            auto top = pq.top();
            pq.pop();
            ans.push_back(top.second);
        }
        return ans;
    }
};