// Online C++ compiler to run C++ program online
#include <iostream>
#include<bits/stdc++.h>
using namespace std;
bool check(vector<int>&arr, int node){
    int n = arr.size();
    if(node>=n) return true;
    int left = 2*node+1;
    int right = 2*node+2;
    if(left<n && arr[node] > arr[left]) return false;
    if(right<n && arr[node] > arr[right]) return false;
    return (check(arr,left) && check(arr,right));
}
int main() {
    // Write C++ code here
    vector<int>arr = {10, 15, 20, 40, 50, 12, 40};
    cout<<check(arr,0);
    //std::cout << "Start small. Ship something.";

    return 0;
}