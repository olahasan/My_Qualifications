#include <string>
using namespace std ; 

string reverseString (string str )
{
  int i;
  string x = "";
  for (i = str.length()-1; i >= 0 ; i--)
    {
      x += str[i]; 
    }
  return x ;
}
