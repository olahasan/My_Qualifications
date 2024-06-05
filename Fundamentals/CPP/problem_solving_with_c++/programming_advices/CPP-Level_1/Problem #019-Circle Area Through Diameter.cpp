#include <iostream>
#include <string>
using namespace std;

float ReadDiameter()
{
    float D;

    cout << "Please enter Radious D" << endl;
    cin >> D;

    return D;
}

float CircleAreaByDiameter(float D)
{
    const float PI = 3.141592653589793238;

    return (pow(D, 2) * PI) / 4;
}


void PrintResult(float Area)
{
    cout << "\Circle Area  = " << Area << endl;
}


int main()
{
    PrintResult(CircleAreaByDiameter(ReadDiameter()));

    return 0;
}
