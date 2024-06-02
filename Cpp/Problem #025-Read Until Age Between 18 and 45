#include <iostream>
#include <string>
using namespace std;


int ReadAge()
{
    int Age;
    cout << "Please enter Age" << endl;
    cin >> Age;
    
    return Age;
}

bool ValidateNumberInRange(int Number, int from, int to)
{
    return (Number >= from && Number <= to);
}

int ReadAgeUntilAgeBetween(int from, int to)
{
    int Age = 0;

    do
    {
        Age = ReadAge();

    } while (!ValidateNumberInRange(Age, from, to));

     return Age;
}


void PrintResult(int Age)
{
    cout << "Your Age is: " << Age  << endl;
}


int main()
{
    PrintResult(ReadAgeUntilAgeBetween(18, 45));
    return 0;
}
