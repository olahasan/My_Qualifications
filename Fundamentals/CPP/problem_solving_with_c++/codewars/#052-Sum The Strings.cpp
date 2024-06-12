#include <string>
using namespace std;
string sum_str(const string& a, const string& b) {
    return to_string(stoi(a == "" ? "0" : a) + stoi(b == "" ? "0" : b));
}
