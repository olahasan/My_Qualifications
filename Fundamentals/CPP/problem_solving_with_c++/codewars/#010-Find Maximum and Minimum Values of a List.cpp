#include <vector>
using namespace std;

int min(vector<int> list){
    int x = list[0];
    for (int i = 0; i < list.size(); i++) {
        if (list[i] < x)
            x = list[i];
    }
    return x;
    //return list[0];
}

int max(vector<int> list){
      int x = list[0];
    for (int i = 0; i < list.size(); i++) {
        if (list[i] > x)
            x = list[i];
    }
    return x;
    //return list[0];
}
