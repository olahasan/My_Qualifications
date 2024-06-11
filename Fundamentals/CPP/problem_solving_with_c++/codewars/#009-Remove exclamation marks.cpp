#include <string>

std::string removeExclamationMarks(std::string str){
    std::string x = "";
    for(char t : str)
      {
          if(t == '!')
              continue;
          x += t;
      }
  return x;
}
