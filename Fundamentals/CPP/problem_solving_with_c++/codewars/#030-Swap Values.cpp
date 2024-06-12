#include <utility>

std::pair<int, int> swap_values(std::pair<int, int> values) {
  int temp = values.first;
  values.first = values.second;
  values.second = temp;
  return values;
}
