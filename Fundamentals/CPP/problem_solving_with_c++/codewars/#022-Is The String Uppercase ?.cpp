#include <string>

bool is_uppercase(const std::string s)
{
    for (char c : s)
        if (c >= 97 && c <= 122)
            return false;
    return true;
}
