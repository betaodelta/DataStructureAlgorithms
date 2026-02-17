class Solution {
public:
    vector<string> readBinaryWatch(int turnedOn) {
        vector<string>ans;
        for(int hr=0;hr<=11;hr++){
            for(int min=0;min<=59;min++){
                if(__builtin_popcount(hr) + __builtin_popcount(min) == turnedOn){
                    string res = "";
                    if(min==0 || min==1 || min==2 || min==3 || min==4 || min==5 || min==6 || min==7 || min==8 || min==9){
                        res = to_string(hr) + ":" + "0" + to_string(min);
                    }
                    else{
                        res = to_string(hr) + ":" + to_string(min);
                    }
                    ans.push_back(res);
                }
            }
        }
        return ans;
    }
};