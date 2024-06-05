#include <iostream>
#include <string>
using namespace std;


int ReadNumber()
{
    int Number;
    cout << "Please enter Number" << endl;
    cin >> Number;
    
    return Number;
}

void PrintRangeFrom1ToN_UsingWhile(int N)
{
    int Counter = 0;
    
    cout << "\nRange printed Using While statement: " << endl;

    while (Counter < N)
    {
        Counter++;
        cout << Counter << endl;
    }
}
void PrintRangeFrom1ToN_UsingDoWhile(int N)
{
    int Counter = 0;

    cout << "\nRange printed Using Do..While statement: " << endl;

    do
    {
        Counter++;
        cout << Counter << endl;

    } while (Counter < N);
}
void PrintRangeFrom1ToN_UsingFor(int N)
{
    cout << "\nRange printed Using For statement: " << endl;
    for (int i = 1; i <= N; i++)
    {
        cout << i << endl;
    }
}

int main()
{
    int N = ReadNumber();

    PrintRangeFrom1ToN_UsingWhile(N);
    PrintRangeFrom1ToN_UsingDoWhile(N);
    PrintRangeFrom1ToN_UsingFor(N);
    return 0;
}