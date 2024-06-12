#include <string>

std::string get_planet_name(int id)
{
  std::string planets[] = {"","Mercury","Venus","Earth","Mars","Jupiter","Saturn","Uranus","Neptune"};
  return planets[id];
}
