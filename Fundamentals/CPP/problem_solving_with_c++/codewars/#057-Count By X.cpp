#include <vector>
std::vector<int> countBy(int x,int n){
  std::vector<int> t;
  for(int i=1;i<=n;i++){
    t.push_back(x*i);
  }
  return t;
}
