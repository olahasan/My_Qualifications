#include <vector>
using namespace std;

vector<int> flip(const char dir, const vector<int>& arr) {
  
  vector<int> x = arr;
  
  if(dir == 'R')
    {
        sort(x.begin(), x.end());
    }
  else
    {
        sort(x.begin(), x.end());
        reverse(x.begin(), x.end());
    }
  
    return x;
  
}

/*
#include <vector>

std::vector<int> flip(const char dir, std::vector<int> arr) {
    if(dir == 'R')
      sort(arr.begin(),arr.end());
    else
      sort(arr.rbegin(),arr.rend());
    return arr;
}
*/
