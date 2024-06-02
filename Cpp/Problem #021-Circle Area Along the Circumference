#include <iostream>
#include <string>
using namespace std;


float ReadCircumReference()
{
    float L;

    cout << "Please enter CircumReference" << endl;
    cin >> L;

    return L;
}

float CircleAreaByCircumReference(float L)
{
    const float PI = 3.141592653589793238;

    return  pow(L,2) / (4 * PI);
}


void PrintResult(float Area)
{
    cout << "\Circle Area  = " << Area << endl;
}


int main()
{
    PrintResult(CircleAreaByCircumReference(ReadCircumReference()));

    return 0;
}
