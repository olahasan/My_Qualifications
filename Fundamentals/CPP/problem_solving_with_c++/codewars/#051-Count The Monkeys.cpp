#include <vector>

std::vector<int> MonkeyCount(int n) {
  
  std::vector<int> NewMonkeyCount ;
  
  for(int i = 1; i <= n; i++)
    {
        NewMonkeyCount.push_back(i);
    }
  
  return NewMonkeyCount;
}
