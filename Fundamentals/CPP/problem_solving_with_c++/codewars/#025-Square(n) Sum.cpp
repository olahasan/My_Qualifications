#include <vector>

int square_sum(const std::vector<int>& numbers)
{
  int x=0;
  for(int n: numbers)
    x += n*n;
  return x;
}
