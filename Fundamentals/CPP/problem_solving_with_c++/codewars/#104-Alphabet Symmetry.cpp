#include <vector>
#include <string>

using namespace std;

vector<int> solve(const vector<string>& arr) {  
  
  vector<int> r;
  int count = 0;
  
  for(string a : arr)
    {
    
      for(int i = 0; i <a.length(); i++)
        {
             if(a[i] ==  i + 97 || a[i] ==  i + 65 )
                count++;
        }
        r.push_back(count);
        count = 0;
    }
  
    return r;
};
