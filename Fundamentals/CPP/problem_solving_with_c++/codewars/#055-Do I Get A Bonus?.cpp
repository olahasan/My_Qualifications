#include<string>
using namespace std;

string bonus_time(int salary, bool bonus)
{
    string all = "";
  
  return all += "$" + to_string(bonus == true ? salary * 10 : salary);
  
}
