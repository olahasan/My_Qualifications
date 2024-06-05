#include <iostream>
#include <string>
using namespace std;

float ReadSquareSide()
{
    float A;

    cout << "Please enter Square Side A" << endl;
    cin >> A;

    return A;
}

float CircleAreaInScribedInSquare(float A)
{
    const float PI = 3.141592653589793238;

    return (PI * pow(A, 2)) / 4;
}


void PrintResult(float Area)
{
    cout << "\Circle Area  = " << Area << endl;
}


int main()
{
    PrintResult(CircleAreaInScribedInSquare(ReadSquareSide()));

    return 0;
}
