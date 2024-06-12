#include <vector>

int arrayPlusArray(std::vector<int> a, std::vector<int> b) {
  
  int arr1 = 0;
  int arr2 = 0;
  
  for(int &x : a)
    arr1 += x;
  
  for(int &x : b)
    arr2 += x;
  
  return arr1 + arr2;
}
