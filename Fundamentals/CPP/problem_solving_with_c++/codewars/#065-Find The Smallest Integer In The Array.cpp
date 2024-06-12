#include <vector>
#include <algorithm>
using namespace std; 

int findSmallest(vector <int> list)
{
  sort(list.begin() , list.end());
  return list[0];
  }
