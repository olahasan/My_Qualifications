#include <vector>

using namespace std; 

int count_sheep(vector<bool> arr) 
{
  int p = 0;
  
  for (bool a : arr)
    {
        a == true ? p++ : p +=0;
    }
  return p;
}
