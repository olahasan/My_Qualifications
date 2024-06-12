#include <vector>
using namespace std;

vector<int> countPositivesSumNegatives(vector<int> input)
{
  vector<int> x ;
  int e = 0;
  int d = 0;
  
  if(input.empty() || input == std::vector<int>{' '})
    return x;
  
  for(int i : input)
    {
        if(i == 0)
             continue;
        else if(i > 0)
             e++;
        else
             d += i ;
    }
  x.push_back(e);
  x.push_back(d);
  return x;
}
