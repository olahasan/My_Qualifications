#include <vector>
#include <cmath>
int index(const std::vector<int> &vector, int n) {
  return n >= (int)vector.size() ? -1 : std::pow(vector[n], n);
}
