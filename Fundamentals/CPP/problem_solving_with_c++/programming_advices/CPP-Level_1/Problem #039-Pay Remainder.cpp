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

float CalculateReminder(float TotalBill, float TotalCashedPaid)
{
    return TotalCashedPaid - TotalBill;
}


int main()
{
    float TotalBill = ReadPositiveNumber("Please Enter A Total Bill");
    float TotalCashedPaid = ReadPositiveNumber("Please Enter A Total Cashed Paid");


    cout << endl;
    cout << "Total Bill =  " << TotalBill << endl;
    cout << "Total Cashed Paid =  " << TotalCashedPaid << endl;

    cout << "***************************\n";
    cout << "Reminder = " << CalculateReminder(TotalBill, TotalCashedPaid);

    return 0;
}
