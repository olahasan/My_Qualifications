#include <string>

std::string no_space(const std::string& x)
{
  std::string t = "";
  
for(int i = 0; i < x.length(); i++)
    {
      if(x[i] == ' ')
        continue;
      t += x[i];
    } 
  
   return t;
}
