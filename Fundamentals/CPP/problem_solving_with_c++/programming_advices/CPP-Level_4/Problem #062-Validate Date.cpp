#include <iostream>
using namespace std;

struct stDate
{
    short Year;
    short Month;
    short Day;

};
bool isLeapYear(short Year)
{
    return (Year % 4 == 0 && Year % 100 != 0) || (Year % 400 == 0);
}

short NumberOfDaysInAMonth(short Month, short Year)
{
    if (Month < 1 || Month>12)
        return  0;
    int days[12] = { 31,28,31,30,31,30,31,31,30,31,30,31 };
    return (Month == 2) ? (isLeapYear(Year) ? 29 : 28) : days[Month - 1];
}

bool IsValidDate(stDate Date) 
{ 
    if (Date.Day < 1 || Date.Day>31) 
        return false; 
    if (Date.Month < 1 || Date.Month>12) 
        return false; 
    if (Date.Month == 2) 
    { 
        if (isLeapYear(Date.Year)) 
        { 
            if (Date.Day > 29) 
                return false; 
        } 
        else 
        { 
            if (Date.Day > 28) 
                return false; 
        } 
    } 
    short DaysInMonth = NumberOfDaysInAMonth(Date.Month, Date.Year); 
    if (Date.Day > DaysInMonth) 
        return false; 
    return true; 
}

short ReadDay()
{
    short Day;
    cout << "\nPlease enter a Day? ";
    cin >> Day;
    return Day;
}

short ReadMonth()
{
    short Month;
    cout << "Please enter a Month? ";
    cin >> Month;
    return Month;
}

short ReadYear()
{
    short Year;
    cout << "Please enter a Year? ";
    cin >> Year;
    return Year;
}

stDate ReadFullDate()
{
    stDate Date;

    Date.Day = ReadDay();
    Date.Month = ReadMonth();
    Date.Year = ReadYear();

    return Date;
}

int main()
{
    stDate Date1 = ReadFullDate(); 
    
    if (IsValidDate(Date1)) 
        cout << "\nYes, Date is a valide date.\n"; 
    else
        cout << "\nNo, Date is a NOT valide date\n";

    system("pause>0");
    return 0;
}
