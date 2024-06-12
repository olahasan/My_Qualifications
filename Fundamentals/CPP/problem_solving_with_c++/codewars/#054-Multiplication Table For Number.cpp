#include <string>
using namespace std;
 string multi_table(int number)
{
  string result="";
    for(int i=1 ;i<=10; i++)
      {
      if(i==10)
        result+= to_string(i) + " * " + to_string(number) + " = " + to_string(i*number);
      else
        result+= to_string(i) + " * " + to_string(number) + " = " + to_string(i*number) +"\n";
      }
  return result;
}
