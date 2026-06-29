// Online C++ compiler to run C++ program online
#include <iostream>
#include<bits/stdc++.h>
using namespace std;

void convertIntoMaxHeap(vector<int>&arr, int node){
    int n = arr.size();
    int largest = node;
    int left = 2*node+1;
    int right = 2*node+2;
    if(left<n && arr[left]>arr[largest]){
        largest = left;
    }
    if(right<n && arr[right]>arr[largest]){
        largest = right;
    }
    if(largest!=node){
        swap(arr[node],arr[largest]);
        convertIntoMaxHeap(arr,largest);
    }
}
int main() {
    // Write C++ code here
    vector<int>arr = {10, 15, 30, 40, 50, 100, 40};
    int n = arr.size();
    cout<<"----MinHeap----"<<endl;
    for(int i=0;i<n;i++){
        cout<<arr[i]<<" ";
    }
    cout<<endl;
    //cout<<check(arr,0);
    
    for(int i=n/2-1;i>=0;i--){
        convertIntoMaxHeap(arr,i);
    }
    cout<<"----MaxHeap----"<<endl;
    for(int i=0;i<n;i++){
        cout<<arr[i]<<" ";
    }
    cout<<endl;
    //std::cout << "Start small. Ship something.";

    return 0;
}