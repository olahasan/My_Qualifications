#include <vector>

bool betterThanAverage(std::vector<int> classPoints, int yourPoints) {
  
  int c = 0;
  
  for(int x : classPoints)
    {
        c += x;
    }
  return yourPoints > (c / classPoints.size());
}
