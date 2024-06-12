#include <string>

std::string makeUpperCase (const std::string& input_str)
{
  std::string x = "";
  
  for(char t : input_str)
       x += toupper(t);
   
  return x;
}
