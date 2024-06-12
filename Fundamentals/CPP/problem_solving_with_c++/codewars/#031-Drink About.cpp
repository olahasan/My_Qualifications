#include <string>

std::string people_with_age_drink(int age) {
  return age<14 ? "drink toddy" : age<18 ? "drink coke" : age<21 ? "drink beer" : "drink whisky";
}
