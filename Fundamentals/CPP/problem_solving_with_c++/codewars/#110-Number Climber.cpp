#include<vector>
using namespace std;
vector<int> climb(int n)
{
    vector<int>res;
    while(n>1){
        res.insert(res.begin(),n);
        n=n/2;
    }
    res.insert(res.begin(),1);
    return res;
}
