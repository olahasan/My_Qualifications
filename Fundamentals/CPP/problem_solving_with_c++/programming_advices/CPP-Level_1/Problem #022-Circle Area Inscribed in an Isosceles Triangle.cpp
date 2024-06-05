#include <iostream>
#include <string>
using namespace std;


void ReadTriangleData(float& A, float& B)
{
    cout << "Please enter triangle Side A" << endl;
    cin >> A;

    cout << "Please enter triangle Base B" << endl;
    cin >> B;
}

float CircleAreaByTriangle(float A, float B)
{
    const float PI = 3.141592653589793238;

    return  PI * (pow(B,2) / 4) * ((2 * A - B) / (2 * A + B));
}


void PrintResult(float Area)
{
    cout << "\Circle Area  = " << Area << endl;
}


int main()
{
    float A, B;
    ReadTriangleData(A, B);
    PrintResult(CircleAreaByTriangle(A, B));

    return 0;
}
