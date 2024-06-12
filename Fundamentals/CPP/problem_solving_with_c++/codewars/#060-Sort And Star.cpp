#include <vector>
#include <string>
#include <algorithm>

std::string twoSort(std::vector<std::string> s)
{
  sort(s.begin(),s.end());
  
  std::string r = s.at(0);
  
  for(int i = 1; i< r.length(); i+=4)
    {
       r.insert(i, "***"); 
    }
    return r;
}
