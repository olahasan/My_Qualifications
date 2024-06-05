#include <iostream>
#include <string>
using namespace std;

void ReadNumbers(float& A, float& D)
{
    cout << "Please enter Rectangle side A" << endl;
    cin >> A;

    cout << "Please enter Rectangle diagonal D" << endl;
    cin >> D;
}

float RectangleAreaBySideDiagonal(float A, float D)
{
    return A * sqrt(pow(D, 2) - pow(A, 2));
}

void PrintResult(float Area)
{
    cout << "\nRectangle Area = " << Area << endl;
}

int main()
{
    float A, D;
    ReadNumbers(A, D);
    PrintResult(RectangleAreaBySideDiagonal(A, D));

    return 0;
}
