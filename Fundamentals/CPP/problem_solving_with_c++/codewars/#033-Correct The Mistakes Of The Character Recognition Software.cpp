#include <string>

std::string correct(std::string str){
  
  std::string Newstr = "";
  
  for(char m : str)
    {
        if( m == '5')
             Newstr += 'S';
        else if( m == '0')
             Newstr += 'O';
        else if( m == '1')
             Newstr += 'I';
        else
          Newstr += m;
    }
  
  return Newstr;
}
