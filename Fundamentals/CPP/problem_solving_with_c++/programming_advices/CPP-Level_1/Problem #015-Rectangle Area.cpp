#include <iostream>
#include <string>
using namespace std;

void ReadNumbers(float& A, float& B)
{
    cout << "Please enter Rectangle Width" << endl;
    cin >> A;

    cout << "Please enter Rectangle Length" << endl;
    cin >> B;
}

float CalculateRectangleArea(float A, float B)
{
    return A * B;
}

void PrintResult(float Area)
{
    cout << "\nRectangle Area = " << Area << endl;
}

int main()
{
    float A, B;
    ReadNumbers(A, B);
    PrintResult(CalculateRectangleArea(A, B));

    return 0;
}
