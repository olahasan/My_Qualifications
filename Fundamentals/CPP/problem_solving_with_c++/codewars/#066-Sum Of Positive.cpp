#include <vector>

int positive_sum (const std::vector<int> arr){
  int c = 0;
  
  for(int a : arr)
    {
        a > 0 ? c += a : 0 ;
    }
  return c;
}
