#include <vector>

std::vector<int> pipe_fix(const std::vector<int>& nums) 
{
   std::vector<int> result;
    
    for (int i = nums.front() ; i <= nums.back() ; i++ ) result.push_back(i);

    return result; 
}
