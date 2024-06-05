#include <iostream>
#include <string>
using namespace std;

void ReadNumbers(float& A, float& H)
{
    cout << "Please enter Rectangle Base A" << endl;
    cin >> A;

    cout << "Please enter Rectangle Height H" << endl;
    cin >> H;
}

float RectangleArea(float A, float H)
{
    return ((A / 2) * H);
}

void PrintResult(float Area)
{
    cout << "\nRectangle Area = " << Area << endl;
}

int main()
{
    float A, H;
    ReadNumbers(A, H);
    PrintResult(RectangleArea(A, H));

    return 0;
}
