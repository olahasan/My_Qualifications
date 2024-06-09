#include<iostream>
using namespace std;


struct stDate{ 
             short Year; 
             short Month;
             short Day; };

bool IsLeapYear(short Year)
{
    return (Year % 4 == 0 && Year % 100 != 0) || (Year % 400 == 0);
}

short NumberOfDaysInAMonth(short Month, short Year)
{
    if (Month < 1 || Month>12)
        return  0;

    int days[12] = { 31,28,31,30,31,30,31,31,30,31,30,31 };

    return (Month == 2) ? (IsLeapYear(Year) ? 29 : 28) : days[Month - 1];
}

bool IsLastDayInMonth(stDate Date)
{ 
    return (Date.Day == NumberOfDaysInAMonth(Date.Month, Date.Year)); 
}

bool IsLastMonthInYear(short Month) 
{ 
    return (Month == 12); 
}

short ReadYear()
{
    short Year;

    cout << "\nPlease enter a year to check? ";
    cin >> Year;

    return Year;
}

short ReadMonth()
{
    short Month;

    cout << "\nPlease enter a Month to check? ";
    cin >> Month;

    return Month;
}

short ReadDay()
{
    short Day;

    cout << "\nPlease enter a Day to check? ";
    cin >> Day;

    return Day;
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
    
    if (IsLastDayInMonth(Date1))     
        cout << "\nYes, Day is Last Day in Month.";
    else
        cout << "\nNo, Day is Not Last Day in Month.";

    if (IsLastMonthInYear(Date1.Month))    
        cout << "\nYes, Month is Last Month in Year."; 
    else
        cout << "\nNo, Month is Not Last Month in Year.";

    system("pause>0"); 
    return 0;
}
