#include <cctype>

std::string to_alternating_case(const std::string& str)
{
  std::string NewStr = "";
  
  for(char x : str)
    {
      if( isupper(x))
          x = tolower(x);
    else if (islower(x))
          x = toupper(x);
    NewStr += x;
    }
     
	return NewStr;
}
