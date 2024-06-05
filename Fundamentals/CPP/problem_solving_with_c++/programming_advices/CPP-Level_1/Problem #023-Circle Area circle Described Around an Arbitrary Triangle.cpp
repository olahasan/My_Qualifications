#include <iostream>
#include <string>
using namespace std;


void ReadTriangleData(float& A, float& B, float& C)
{
    cout << "Please enter triangle Side A" << endl;
    cin >> A;

    cout << "Please enter triangle Base B" << endl;
    cin >> B;

    cout << "Please enter triangle Side C" << endl;
    cin >> C;
}

float CircleAreaByTriangle(float A, float B, float C)
{
    const float PI = 3.141592653589793238;
    float P = (A + B + C) / 2;
    float T = (A * B * C) / (4 * sqrt(P * (P - A) * (P - B) * (P - C)));

    return  PI * pow(T,2);
}


void PrintResult(float Area)
{
    cout << "\Circle Area  = " << Area << endl;
}


int main()
{
    float A, B, C;
    ReadTriangleData(A, B, C);
    PrintResult(CircleAreaByTriangle(A, B, C));

    return 0;
}
