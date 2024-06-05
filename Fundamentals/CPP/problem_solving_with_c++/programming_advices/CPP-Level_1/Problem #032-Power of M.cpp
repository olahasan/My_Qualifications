#include <iostream>
#include <string>
using namespace std;

int ReadNumber()
{
    int Number;

    cout << "Please Enter a Number " << endl;
    cin >> Number;

    return Number;
}

int ReadPower()
{
    int Power;

    cout << "Please Enter a Number(Power) " << endl;
    cin >> Power;

    return Power;
}

int PowerOfM(int Number, int M)
{
    if (M == 0)
        return 1; //Any Number Powered to 0 equal 1.

    int P = 1;
    for (int i = 1; i<= M; i++)
    {
        P *= Number;
    }
    return P;
}


int main()
{
    int Number = ReadNumber();
    int Power = ReadPower();

    cout << endl << "Result for " << Number << "^" << Power << " = " << PowerOfM(Number, Power);
    return 0;
}
