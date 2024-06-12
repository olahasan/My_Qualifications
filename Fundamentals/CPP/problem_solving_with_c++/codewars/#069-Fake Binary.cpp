#include <string>

std::string fakeBin(std::string str){
  
  std::string NewStr = "";
  
  for(char s : str)
    {
        s < '5' ? NewStr += '0' : NewStr += '1';
    }
  
  return NewStr;
}
