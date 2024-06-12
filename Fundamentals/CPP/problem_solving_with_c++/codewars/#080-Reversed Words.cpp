#include <string>
#include <algorithm>
using namespace std;


string reverse_words(const string& str) {
  
  string NewStr = "";
   string TempStr = "";
  
  for(int i = 0; i < str.length(); i++)
    {
        if(str[i] == ' ')
          {
              NewStr = TempStr + " " + NewStr;
              TempStr = "";
          }
        else
          {
              TempStr += str[i];
          }
    }
  
  NewStr = TempStr + " " + NewStr;
  NewStr.pop_back();
  
  return NewStr;
}
Best Practices0Clever0
 0ForkCompare with your solutionLink
