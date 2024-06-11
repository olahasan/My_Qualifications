#include <vector>

std::vector<int> invert(std::vector<int> values)
{
    for(int &a:values)
      a = -a;
    return values;
}
