#include <vector>
int grow(std::vector<int> nums) {
 int All = 1;
  for(int &num : nums)
    {
        All *= num;
    }
  return All;
}
