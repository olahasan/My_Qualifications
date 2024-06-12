#include <string>

std::string update_light(std::string current) {
  if (current == "green")
  {
    return "yellow";
  }
  if (current == "yellow")
    {
    return "red";
  }
  if (current == "red")
    {
    return "green";
  }
}
