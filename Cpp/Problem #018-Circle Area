#include <iostream>
#include <string>
using namespace std;

float ReadRadious()
{
    float R;

    cout << "Please enter Radious R" << endl;
    cin >> R;

    return R;
}

float CircleArea(float R)
{
    const float PI = 3.141592653589793238;

    return pow(R, 2) * PI;
}


void PrintResult(float Area)
{
    cout << "\Circle Area  = " << Area << endl;
}


int main()
{
    PrintResult(CircleArea(ReadRadious()));

    return 0;
}
