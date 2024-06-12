#include <vector>

int get_average(std::vector <int> marks)
{
  int sum  = 0;
  for (int m : marks) sum += m;
  return sum / marks.size();
}
