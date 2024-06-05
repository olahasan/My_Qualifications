#include <iostream>
#include <string>
using namespace std;


enum enDaysOfWeek {Jan = 1, Feb = 2, Mar = 3, Apr = 4, May = 5, Jun = 6, 
                   Jul = 7, Aug = 8, Sep = 9, Oct = 10,Nov = 11,Des = 12};

int ReadNumberInRange(string Message,int From, int To)
{
    int Number;

    do
    {
        cout << Message << endl;
        cin >> Number;

    } while (Number < From || Number > To);

    return Number;
}

enDaysOfWeek ReadDayOfMonth()
{
    return (enDaysOfWeek)ReadNumberInRange("Please Enter a Grade between 1 : 12 ", 1, 7);
}
string GetDayOfMonth(enDaysOfWeek Day)
{
    switch (Day)
    {
   
    case enDaysOfWeek::Jan :
        return "January";
    case enDaysOfWeek::Feb :
        return "February";
    case enDaysOfWeek::Mar :
        return "March";
    case enDaysOfWeek::Apr :
        return "April";
    case enDaysOfWeek::May :
        return "May";
    case enDaysOfWeek::Jun :
        return "June";
    case enDaysOfWeek::Jul:
        return "July";
    case enDaysOfWeek::Aug :
        return "August";
    case enDaysOfWeek::Sep:
        return "September";
    case enDaysOfWeek::Oct:
        return "October";
    case enDaysOfWeek::Nov:
        return "November";
    case enDaysOfWeek::Des:
        return "December";
    default:
        "enter a correct Number";
    }
}



int main()
{
    cout << GetDayOfMonth(ReadDayOfMonth()) << endl;

    return 0;
}
