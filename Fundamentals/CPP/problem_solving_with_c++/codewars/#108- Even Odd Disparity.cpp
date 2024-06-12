#include <string>
#include<vector>

int solve(std::vector<std::string>v){
    int a = 0;
    for (std::string s : v)
        if(isdigit(s[0]))
            stoi(s) % 2 == 0 ?  a++ : a--;             
    return a;
}
