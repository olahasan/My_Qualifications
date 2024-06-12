#include <string>

std::string abbrevName(std::string name)
{
  std::string NewName = "";
  
  char x = name.at(0);
  NewName += toupper(x);
  
  NewName += ".";
  
  int position = name.find(" ");
  char t = name.at(position + 1);
  NewName += toupper(t);
  
  return NewName;
}
