#include <string>

bool feast(std::string beast, std::string dish)
{
  return dish.front() == beast.front() && dish.back() == beast.back();
}
