#include <iostream>
#include <string>
using namespace std;

float ReadNumber(string Message)
{
    float Number;

    cout << Message << endl;
    cin >> Number;

    return Number;
}

float SumNumbers()
{
    float Sum = 0, Number = 0;
    int Counter = 1;

    do
    {
        Number = ReadNumber("Please Enter Number" + to_string(Counter));
        if (Number == -99)
        {
            break;
        }
        Sum += Number;
        Counter++;

    } while (Number != -99);

    return Sum;
}

int main()
{
    cout << endl << "Result = " << SumNumbers() << endl;

    return 0;
}
