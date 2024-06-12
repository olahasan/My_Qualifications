#include <string>

bool isPalindrom (const std::string& str)
{
  
  //int n = str.length() / 2;
  
  for(int i = 0; i < str.length(); i++)
    {
        if(tolower(str[i]) != tolower(str[str.length() -1 -i]))
          {
              return false ;
          }
    }
  return true;
}
