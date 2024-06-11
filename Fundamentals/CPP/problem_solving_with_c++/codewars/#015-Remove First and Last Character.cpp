#include <string>

using namespace std; 

string sliceString (string str )
{
  return string(str.begin()+1,str.end()-1) ; 
}
