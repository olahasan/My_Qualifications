#include <string>

std::string countSheep(int number) {

	std::string x = "";

	for (int i = 1; i <= number; i++)
	{
		x += std::to_string(i) + " sheep...";
	}
	return x;
}
