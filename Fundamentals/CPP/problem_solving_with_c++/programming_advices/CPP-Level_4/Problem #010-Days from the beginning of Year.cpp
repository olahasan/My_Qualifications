#include<iostream>
using namespace std;

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

short NumberOfDaysFromTheBeginingOfTheYear(short Day, short Month, short Year) 
{ 
    short TotalDays = 0; 

    for (int i = 1; i <= Month - 1; i++) 
    { 
        TotalDays += NumberOfDaysInAMonth(i, Year); 
    } 
    TotalDays += Day; 
    
    return TotalDays;
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

int main() 
{ 

    short Day = ReadDay(); 
    short Month = ReadMonth();
    short Year = ReadYear();   
    
    cout << "\nNumber of Days from the begining of the year is " << NumberOfDaysFromTheBeginingOfTheYear(Day, Month, Year);

    system("pause>0"); 
    return 0;
}
