// Online C++ compiler to run C++ program online
#include <iostream>
#include<bits/stdc++.h>
using namespace std;

void convertIntoMinHeap(vector<int>&arr, int node){
    int n = arr.size();
    int smallest = node;
    int left = 2*node+1;
    int right = 2*node+2;
    if(left<n && arr[left]<arr[smallest]){
        smallest = left;
    }
    if(right<n && arr[right]<arr[smallest]){
        smallest = right;
    }
    if(smallest!=node){
        swap(arr[node],arr[smallest]);
        convertIntoMinHeap(arr,smallest);
    }
}
int main() {
    // Write C++ code here
    vector<int>arr = {100,20,40,40,15,30,10};
    int n = arr.size();
    cout<<"----MaxHeap----"<<endl;
    for(int i=0;i<n;i++){
        cout<<arr[i]<<" ";
    }
    cout<<endl;
    //cout<<check(arr,0);
    
    for(int i=n/2-1;i>=0;i--){
        convertIntoMinHeap(arr,i);
    }
    cout<<"----MinHeap----"<<endl;
    for(int i=0;i<n;i++){
        cout<<arr[i]<<" ";
    }
    cout<<endl;
    //std::cout << "Start small. Ship something.";

    return 0;
}