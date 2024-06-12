#include <array>
#include <string>

using namespace std;

array<string, 3> fixTheMeerkat(array<string, 3> arr) {
    reverse(arr.begin(), arr.end());
    return arr;
}
