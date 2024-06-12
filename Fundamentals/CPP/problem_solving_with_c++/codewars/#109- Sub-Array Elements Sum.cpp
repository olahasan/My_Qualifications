#include<vector>

using namespace std;

long elementsSum(const vector<vector<int>>& arr, int d = 0) {
  
  int result = 0; // 1 + 6
  int arr_count = arr.size();
  
  for (int i = 0; i < arr_count; i++) // i = 2
  {
    int index_and_count = arr_count - 1 - i; // 3 - 1 - 2 = 0
    if (arr[i].size() > index_and_count)
    {
      result += arr[i][index_and_count];
    }
    else
    {
      result += d;
    }
  }
  
  
  return result;
  
}
