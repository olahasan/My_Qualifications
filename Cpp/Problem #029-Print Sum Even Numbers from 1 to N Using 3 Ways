#include <iostream>
#include <string>
using namespace std;


enum enOddOrEven { Odd = 1, Even = 2};

int ReadNumber()
{
    int Number;
    cout << "Please enter Number" << endl;
    cin >> Number;
    
    return Number;
}

enOddOrEven CheckOddOrEven(int Number)
{
    if (Number % 2 != 0)
        return enOddOrEven::Odd;
    else
        return enOddOrEven::Even;
}


int SumEvenNumbersFrom1ToN_UsingWhile(int N)
{
    int Counter = 0;
    int Sum = 0;
    
    cout << "\nSum Odd Numbers Using While statement: " << endl;

    while (Counter < N)
    {
        Counter++;
        if (CheckOddOrEven(Counter) == enOddOrEven::Even)
            Sum += Counter;
    }

    return Sum;
}
int SumEvenNumbersFrom1ToN_UsingDoWhile(int N)
{
    int Counter = 0;
    int Sum = 0;

    cout << "\nSum Odd Numbers Using Do..While statement: " << endl;

    do
    {
        Counter++;
        if (CheckOddOrEven(Counter) == enOddOrEven::Even)
            Sum += Counter;

    } while (Counter < N);

    return Sum;
}
int SumEvenNumbersFrom1ToN_UsingFor(int N)
{
    int Sum = 0;

    cout << "\nSum Odd Numbers Using For statement: " << endl;
    for (int i = 1; i <= N; i++)
    {
        if (CheckOddOrEven(i) == enOddOrEven::Even)
            Sum += i;
    }

    return Sum;
}

int main()
{
    int N = ReadNumber();

    cout << SumEvenNumbersFrom1ToN_UsingWhile(N) << endl;
    cout << SumEvenNumbersFrom1ToN_UsingDoWhile(N) << endl;
    cout << SumEvenNumbersFrom1ToN_UsingFor(N) << endl;
    return 0;
}
