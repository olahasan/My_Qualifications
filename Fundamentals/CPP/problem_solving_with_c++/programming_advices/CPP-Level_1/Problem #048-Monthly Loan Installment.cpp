#include <iostream>
#include <string>
using namespace std;


float ReadPositiveNumber(string Message)
{
    float Number;
    do
    {
        cout << Message << endl;
        cin >> Number;

    } while (Number < 0);

    return Number;
}

float MonthlyInstallment(float LoanAmount, float HowManyMonth)
{
    return (float)LoanAmount / HowManyMonth;
}


int main()
{
    float LoanAmount = ReadPositiveNumber("Please enter a Loan Amount");
    float HowManyMonth = ReadPositiveNumber("Please enter a Number Of Months");

    cout << "\nMonthly Installment = " << MonthlyInstallment(LoanAmount, HowManyMonth) << endl;
    cout << endl;

    return 0;
}
