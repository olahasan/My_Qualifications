#include <vector>
#include <algorithm>

unsigned int most_frequent_item_count(const std::vector<int>& collection) {
  
   if (collection.empty()) {
    return 0;
  }
  
  int count = 0;
  std::vector<int> x;
  
  for(int i = 0; i< collection.size(); i++)
    {  
        x.push_back(std::count(collection.begin(), collection.end(),collection[i]));
    }
  count = *std::max_element(x.begin(), x.end());
  return count;
}
