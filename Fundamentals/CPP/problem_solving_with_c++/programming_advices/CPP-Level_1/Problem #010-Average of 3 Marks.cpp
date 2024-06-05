#include <iostream>
#include <string>
using namespace std;

void ReadNumbers(int& Num1, int& Num2, int& Num3)
{
    cout << "Please enter your Num1" << endl;
    cin >> Num1;

    cout << "Please enter your Num2" << endl;
    cin >> Num2;

    cout << "Please enter your Num3" << endl;
    cin >> Num3;
}

int SumOf3Numbers(int Num1, int Num2, int Num3)
{
    return Num1 + Num2 + Num3;
}

float CalculateAverageOfNumbers(int Num1, int Num2, int Num3)
{
    return   (float)SumOf3Numbers(Num1, Num2, Num3) / 3;
}

void PrintResult(float Total)
{
    cout << "\n the total sum of numbers is: " << Total << endl;
}

int main()
{
    int Num1, Num2, Num3;
    ReadNumbers(Num1, Num2, Num3);
    PrintResult(CalculateAverageOfNumbers(Num1, Num2, Num3));
    return 0;
}
