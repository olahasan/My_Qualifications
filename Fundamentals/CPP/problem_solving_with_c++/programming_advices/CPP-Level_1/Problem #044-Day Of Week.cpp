
#include <iostream>
#include <string>
using namespace std;

enum enDaysOfWeek {Sat = 1, Sun = 2, Mon = 3, Tue = 4, Wed = 5, Thu = 6, fri = 7};

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

enDaysOfWeek ReadDayOfWeek()
{
    return (enDaysOfWeek)ReadNumberInRange("Please Enter a Grade between 1 : 7 ", 1, 7);
}
string GetDayOfWeek(enDaysOfWeek Day)
{
    switch (Day)
    {
    case enDaysOfWeek::Sat :
        return "Saturday";
    case enDaysOfWeek::Sun :
        return "Sunday";
    case enDaysOfWeek::Mon :
        return "Monday";
    case enDaysOfWeek::Tue :
        return "Tuesday";
    case enDaysOfWeek::Wed :
        return "WednesDay";
    case enDaysOfWeek::Thu :
        return "Thursday";
    case enDaysOfWeek::fri :
        return "Friday";
    default:
        "enter a correct Number";
    }
}



int main()
{
    cout << GetDayOfWeek(ReadDayOfWeek()) << endl;

    return 0;
}
