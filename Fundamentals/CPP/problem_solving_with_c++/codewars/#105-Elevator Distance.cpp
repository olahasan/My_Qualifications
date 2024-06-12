#include <vector>
using namespace std;
int elevator_distance(vector<int> array) {
  int count=0;
  for(int i=0;i<array.size()-1;i++){
 if(array[i]>array[i+1]) count+=array[i]-array[i+1];
    else 
      count+=array[i+1]-array[i];
  }
  return count;
}
