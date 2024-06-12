#include <vector>
#include <algorithm>

int sumOfDifferences(const std::vector<int>& arr){
  return arr.size() < 2 ? 0 : *std::max_element(arr.begin(), arr.end()) - *std::min_element(arr.begin(), arr.end());
}
