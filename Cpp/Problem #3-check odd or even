
#include <iostream>
#include <string>
using namespace std;


enum enNumberType { Odd = 1, Even = 2 };

int ReadNumber()
{
    int number;

    cout << "Please enter a number" << endl;
    cin >> number;

    return number;
}

enNumberType CheckNumberType(int number)
{
    int result = number % 2;

    return result == 0 ? enNumberType::Even : enNumberType::Odd;
}

void PrintNumberType(enNumberType number)
{
    if (number == enNumberType::Even)
        cout << "\nnumber is EVEN\n " << endl;
    else
        cout << "\nnumber is ODD\n " << endl;
}

int main()
{
    PrintNumberType(CheckNumberType(ReadNumber()));
    return 0;
}

