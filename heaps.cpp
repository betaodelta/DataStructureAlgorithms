#include <iostream>
#include<bits/stdc++.h>
using namespace std;
class Heap{
    public:
    int capacity;
    vector<int>arr;
    int size;
    Heap(int cap){
        capacity = cap;
        size = 0;
        arr.reserve(cap);
    }
    
    int findParent(int i){
        return (i-1)/2;
        
    }
    int leftChild(int i){
        return (2*i)+1;
    }
    int rightChild(int i){
        return (2*i)+2;
    }
    void insert(int val){
        if(size==capacity){
            cout<<"Heap overflow"<<endl;
            return;
        }
        arr.push_back(val);
        int k = size;
        size++;
        while(k!=0 && arr[findParent(k)] > arr[k]){
            swap(arr[findParent(k)],arr[k]);
            cout<<"k, parent(k)"<<k<<":"<<findParent(k)<<" ";
            k = findParent(k);
            
        }
    }
    void print(){
        for(int i=0;i<size;i++){
            cout<<arr[i]<<" ";
        }
        cout<<endl;
    }
    void maxInsert(int val){
        if(size==capacity){
            cout<<"Heap overflow"<<endl;
            return;
        }
        arr.push_back(val);
        int k = size;
        size++;
        while(k!=0 && arr[findParent(k)] < arr[k]){
            swap(arr[findParent(k)],arr[k]);
            cout<<"k, parent(k)"<<k<<":"<<findParent(k)<<" ";
            k = findParent(k);
            
        }
    }
    void heapify(int idx){
        int left = leftChild(idx);
        int right = rightChild(idx);
        int smallest = idx;
        if(left<size && arr[left]<arr[smallest]){
            smallest = left;
        }
        if(right<size && arr[right]<arr[smallest]){
            smallest = right;
        }
        if(smallest!=idx){
            swap(arr[smallest],arr[idx]);
            cout<<"Smallest: "<<smallest<<" ";
            heapify(smallest);
        }
    }
    void maxHeapify(int idx){
        int left = leftChild(idx);
        int right = rightChild(idx);
        int largest = idx;
        if(left<size && arr[left]>arr[largest]){
            largest = left;
        }
        if(right<size && arr[right]>arr[largest]){
            largest = right;
        }
        if(largest!=idx){
            swap(arr[largest],arr[idx]);
            cout<<"largest: "<<largest<<" ";
            maxHeapify(largest);
        }
    }
    void minDelete(int idx){
        if(idx>=size || idx<0){
            cout<<"Invalid idx to delete"<<endl;
            return;
        }
        int maxEle = arr[size-1];
        size--;
        arr.pop_back();
        if(idx==size) return;
        int deletedEle = arr[idx];
        arr[idx] = maxEle;
        if(maxEle > deletedEle){
            heapify(idx);
        }
        else{
            int k = idx;
            while(k!=0 && arr[findParent(k)] > arr[k]){
                swap(arr[findParent(k)],arr[k]);
                k = findParent(k);
            }
        }
    }
    void maxDelete(int idx){
        if(idx<0 || idx>=size){
            cout<<"Invalid idx"<<endl;
            return;
        }
        int miniEle = arr[size-1];
        size--;
        arr.pop_back();
        if(idx==size) return;
        int deletedEle = arr[idx];
        arr[idx] = miniEle;
        if(deletedEle > miniEle) maxHeapify(idx);
        else{
            int k = idx;
            while(k!=0 && arr[findParent(k)] < arr[k]){
                swap(arr[findParent(k)],arr[k]);
                k = findParent(k);
            }
        }
    }
    int getMin(){
        return arr[0];
    }
    int getMax(){
        return arr[0];
    }
    int extractMini(){
        if(size<=0){
            return INT_MAX;
        }
        if(size==1){
            size--;
            arr.pop_back();
            return arr[0];
        }
        int mini = arr[0];
        arr[0] = arr[size-1];
        size--;
        arr.pop_back();
        heapify(0);
        return mini;
    }
    int extractMax(){
        if(size<=0){
            return INT_MIN;
        }
        if(size==1){
            size--;
            arr.pop_back();
            return arr[0];
        }
        int maxi = arr[0];
        arr[0] = arr[size-1];
        size--;
        arr.pop_back();
        maxHeapify(0);
        return maxi;
    }
};
int main() {
    // Allocate our heap container
    Heap* h = new Heap(10);

    // ==========================================
    // CYCLE 1: MIN-HEAP TESTING
    // ==========================================
    cout << "--- 1. MIN-HEAP TESTING ---" << endl;
    cout << "Inserting elements: 9, 1, -1, 4, 10, 0" << endl;
    h->insert(9);
    h->insert(1);
    h->insert(-1);
    h->insert(4);
    h->insert(10);
    h->insert(0);
    
    cout << "\nMin-Heap Array Structure: ";
    h->print(); // Should show the minimum value (-1) at index 0

    cout << "\nPeek Minimum Element (getMin): " << h->getMin() << endl;

    cout << "\nExtracting Minimum Root (extractMini)..." << endl;
    int extractedMin = h->extractMini();
    cout << "Extracted value: " << extractedMin << endl;
    cout << "Heap after extraction: ";
    h->print();

    cout << "\nDeleting specific index 2 from Min-Heap (minDelete(2))..." << endl;
    h->minDelete(2);
    cout << "Heap after minDelete(2): ";
    h->print();


    // ==========================================
    // CYCLE 2: MAX-HEAP TESTING
    // ==========================================
    cout << "\n\n--- 2. MAX-HEAP TESTING ---" << endl;
    cout << "Resetting heap context safely..." << endl;
    h->size = 0;
    h->arr.clear(); // Clear vector memory tracking alongside size index!

    cout << "Inserting elements into Max-Heap: 9, 1, 3, 4, 10, 11" << endl;
    h->maxInsert(9);
    h->maxInsert(1);
    h->maxInsert(3);
    h->maxInsert(4);
    h->maxInsert(10);
    h->maxInsert(11);

    cout << "\nMax-Heap Array Structure: ";
    h->print(); // Should show the maximum value (11) at index 0

    cout << "\nPeek Maximum Element (getMax): " << h->getMax() << endl;

    cout << "\nExtracting Maximum Root (extractMax)..." << endl;
    int extractedMax = h->extractMax();
    cout << "Extracted value: " << extractedMax << endl;
    cout << "Heap after extraction: ";
    h->print();

    cout << "\nDeleting specific index 1 from Max-Heap (maxDelete(1))..." << endl;
    h->maxDelete(1);
    cout << "Heap after maxDelete(1): ";
    h->print();

    // ==========================================
    // CYCLE 3: EDGE CASES & CLEANUP
    // ==========================================
    cout << "\n\n--- 3. EDGE CASE TESTING ---" << endl;
    cout << "Attempting out-of-bounds deletion (maxDelete(50)): ";
    h->maxDelete(50);

    // Emptying out the rest of the heap elements to hit underflow boundaries
    cout << "Emptying the heap..." << endl;
    while(h->size > 0) {
        h->extractMax();
    }
    cout << "Current Heap state: "; 
    h->print();
    cout << "Attempting extraction on an empty heap (extractMax): " << h->extractMax() << " (INT_MIN)" << endl;

    // Clean up heap pointer memory safely
    delete h;
    cout << "\nHeap instance destroyed. Run finished." << endl;

    return 0;
}