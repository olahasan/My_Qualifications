#include <regex>

using namespace std;

string replace(const string& s)
{
	regex pattern("[aeiouAEIOU]");
	return regex_replace(s, pattern, "!");
}
