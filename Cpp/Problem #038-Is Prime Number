#include <iostream>
#include <string>
using namespace std;


enum enPrimeNotPrime {Prime = 1, NotPrime = 2};

float ReadPositiveNumber(string Message)
{
    float Number;
    do 
    {
        cout << Message << endl;
        cin >> Number;
    } while (Number < 0);

    return Number;
}

enPrimeNotPrime CheckPrime(int Number)
{
    int M = round(Number / 2);

    for (int i = 2; i<= M; i++)
    {
        if (Number % i == 0)
        {
            return enPrimeNotPrime::NotPrime;
        }
    }

    return enPrimeNotPrime::Prime;
}

void PrintNumberType(int Number)
{
    switch (CheckPrime(Number))
    {
    case enPrimeNotPrime::Prime:
        cout << "The Number is Prime\n" << endl;
        break;
    case enPrimeNotPrime::NotPrime:
        cout << "The Number is NOT Prime\n" << endl;
        break;
    }
}




int main()
{
    PrintNumberType(ReadPositiveNumber("Please Enter A positive Number"));

    return 0;
}
