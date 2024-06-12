#include <vector>

double calcAverage(const std::vector<int>& values){
  
  float x = 0;
  
  for (int v : values)
       x += v; 
  
  return x / values.size();
  
}
