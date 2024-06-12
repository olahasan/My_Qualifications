#include <vector>

int sum(std::vector<int> nums) {
  
  int x = 0;
  
  if(nums.empty())
    return 0;
  
  for(int n : nums)
    {
        x += n;
    }
  return x;
}
