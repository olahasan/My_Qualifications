#include <vector>
#include <algorithm>

std::vector<int> evenNumbers(const std::vector<int>& arr, int n) {
    std::vector<int> evenNumbers;

    // Use std::copy_if with a lambda function as the predicate
    std::copy_if(arr.begin(), arr.end(), std::back_inserter(evenNumbers), [](int num) {
        return num % 2 == 0;  // Check if the number is even
    });

    // Reverse the evenNumbers vector
    std::reverse(evenNumbers.begin(), evenNumbers.end());

    // Truncate the vector to contain only 'n' elements
    evenNumbers.resize(n);

    // Reverse the evenNumbers vector again to restore the original order
    std::reverse(evenNumbers.begin(), evenNumbers.end());

    return evenNumbers;
}
