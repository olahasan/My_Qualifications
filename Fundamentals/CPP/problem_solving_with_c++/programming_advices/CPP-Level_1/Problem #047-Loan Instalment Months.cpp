
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

float TotalMonths(float LoanAmount, float MonthlyInstallment)
{
    return (float)LoanAmount / MonthlyInstallment;
}


int main()
{
    float LoanAmount = ReadPositiveNumber("Please enter a Loan Amount");
    float MonthlyInstallment = ReadPositiveNumber("Please enter Monthly Installment");

    cout << "\nTotal Months to pay = " << TotalMonths(LoanAmount, MonthlyInstallment) << endl;
    cout << endl;

    return 0;
}
