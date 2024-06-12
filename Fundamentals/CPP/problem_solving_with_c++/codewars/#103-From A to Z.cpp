#include <string>

std::string gimme_the_letters(const std::string& sp)
{
  std::string  x = "";
  
  int s = static_cast<int>(sp[0]);
  int e = static_cast<int>(sp[2]);
  
  for(int i = s; i <= e; i++)
    {
       x += static_cast<int>(i);
    }
  
    return x;
}
