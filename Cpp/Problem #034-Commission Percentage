#include <iostream>
#include <string>
using namespace std;

int ReadTotalSales()
{
    int TotalSales;

    do
    {
        cout << "Please Enter a Total Sales " << endl;
        cin >> TotalSales;

    } while (TotalSales < 0);

    return TotalSales;
}

float GetComissionPercentage(float TotalSales)
{

    if (TotalSales >= 1000000)
        return 0.01;
    else if (TotalSales >= 500000)
        return 0.02;
    else if (TotalSales >= 100000)
        return 0.03;
    else if (TotalSales >= 50000)
        return 0.05;
    else 0.00;
}


float CalculateTotalComissionTo(float TotalSales)
{
    return GetComissionPercentage(TotalSales) * TotalSales;
}


int main()
{
    float TotalSales = ReadTotalSales();

    cout  <<  endl <<"Comission Percentage = " << GetComissionPercentage(TotalSales);
    cout << endl << "Total Comission = " << CalculateTotalComissionTo(TotalSales);
    return 0;
}
