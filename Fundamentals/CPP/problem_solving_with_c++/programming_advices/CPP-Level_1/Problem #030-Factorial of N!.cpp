#include <iostream>
#include <string>
using namespace std;


int ReadPositiveNumber(string Message)
{
    int Number;

    do
    {
        cout << Message << endl;
        cin >> Number;

    } while (Number < 0);
   
    return Number;
}

int Factorial(int N)
{
    int F = 1;

    for (int i = N; i >= 1; i--)
    {
        F *= i;
    }
    /*for (int i = 1; i <= N; i++)
    {
        F *= i;
    }*/

    return F;
}

int main()
{
    cout << Factorial(ReadPositiveNumber("Enter A Positive Number")) << endl;
    return 0;
}
