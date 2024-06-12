#include <vector>
#include <algorithm>
using namespace std;

int sum(vector<int> numbers)
{
    if (numbers.size() <= 1)
        return 0;

    int Count = 0;
    sort(numbers.begin(), numbers.end());

    for (int i = 1; i < (numbers.size() - 1); i++)
        Count += numbers.at(i);

    return Count;
}
