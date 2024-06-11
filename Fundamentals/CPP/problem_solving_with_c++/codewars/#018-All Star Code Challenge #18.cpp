#include <string>

unsigned int strCount(const std::string& word, char letter){
  
  int counter = 0;
  for(char  x : word)
    {
        if(x == letter)
          {
            counter += 1;
          }
    }
  return counter; // your code here
}
