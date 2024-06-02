#include <iostream>
#include <string>
using namespace std;

enum enPassFail { Pass = 1, Fail = 2 };

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

enPassFail CheckAverage(float Average)
{
    if (Average >= 50)
        return enPassFail::Pass;
    else
        return enPassFail::Fail;
}

void PrintResult(float Average)
{
    cout << "\n your Average is: " << Average << endl;

    if (CheckAverage(Average) == enPassFail::Pass)
        cout << "\n Passed" << endl;
    else
        cout << "\n Failed" << endl;

}

int main()
{
    int Num1, Num2, Num3;
    ReadNumbers(Num1, Num2, Num3);
    PrintResult(CalculateAverageOfNumbers(Num1, Num2, Num3));
    return 0;
}
