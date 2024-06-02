#include <iostream>
#include <string>
using namespace std;

int ReadNumber()
{
    int number;

    cout << "Please enter a number" << endl;
    cin >> number;

    return number;
}

float CalculateHalfOfNumber(int Number)
{
    return float(Number) / 2;
}

void PrintResult(int Number)
{
    cout << "Half of " + to_string(Number) + " is: " + to_string(CalculateHalfOfNumber(Number)) << endl;
}

int main()
{
    PrintResult(ReadNumber());
    return 0;
}
