#include <vector>
#include <string>

using namespace std;

vector<string> string_to_array(const string& s) {
  
  vector<string> NewV;
  string T = "";
  
  for(char x : s)
    {
        if (x != ' ')
              T += x;
        else
          {
            NewV.push_back(T);
            T.clear();
          }
    }
   NewV.push_back(T);
    return NewV;
}
