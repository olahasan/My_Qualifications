using namespace std;
#include<vector>
#include<algorithm>


 vector<int> digitize(unsigned long n) 
{        
  vector<int> Newn;
   
  string t = to_string(n);
   
  reverse(t.begin(),t.end());
  
  for(char & x : t)
    {
        Newn.push_back( x - '0');
    }
  
    return Newn;

}
