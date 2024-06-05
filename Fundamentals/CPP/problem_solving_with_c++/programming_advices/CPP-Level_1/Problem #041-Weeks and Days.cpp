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

float HoursToDay(float NumberOfHours)
{
    return (float)NumberOfHours / 24;
}

float HoursToWeeks(float NumberOfHours)
{
    return (float)NumberOfHours / 24 / 7;
}

float DaysToWeeks(float NumberOfDays)
{
    return (float)NumberOfDays / 7;
}



int main()
{
    float NumberOfHours = ReadPositiveNumber("Please Enter A Number Of Hours");
    float NumberOfDays = HoursToDay(NumberOfHours);
    float NumberOfWeeks = DaysToWeeks(NumberOfDays);

    cout << endl;
    cout << "Total Hours =  " << NumberOfHours << endl;
    cout << "Total Days =  " << NumberOfDays << endl;
    cout << "Total Weeks =  " << HoursToWeeks(NumberOfHours) << endl;

    return 0;
}
