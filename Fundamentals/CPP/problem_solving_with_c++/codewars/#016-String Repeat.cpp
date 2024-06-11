#include <string>

std::string repeat_str(size_t repeat, const std::string& str) {
  std::string fin = "";
  for (int i = 0; i < repeat; i++) {
    fin += str;
  }
  return fin;
}
