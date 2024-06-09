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


struct sDate{ 
             short Year; 
             short Month;
             short Day; };

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

sDate DateAddDays(short Days, sDate Date) 
{ 
    short RemainingDays = Days + NumberOfDaysFromTheBeginingOfTheYear(Date.Day, Date.Month, Date.Year);
    short MonthDays = 0;
    Date.Month = 1;

    while (true) 
    { 
        MonthDays = NumberOfDaysInAMonth(Date.Month, Date.Year);
        if (RemainingDays > MonthDays) 
        { 
            RemainingDays -= MonthDays;
            Date.Month++;
            
            if (Date.Month > 12) 
            { 
                Date.Month = 1; 
                Date.Year++; 
            } 
        } 
        else 
        { 
            Date.Day = RemainingDays; 
            break; 
        } 
    }
    return Date; 
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

sDate ReadFullDate() 
{ 
    sDate Date;  

    Date.Day = ReadDay();  
    Date.Month = ReadMonth();  
    Date.Year = ReadYear();
    
    return Date;
}

short ReadDaysToAdd() 
{
    short Days;    
    
    cout << "\nHow many days to add? ";   
    cin >> Days; 
    
    return Days; 
}


int main() 
{ 

    sDate Date = ReadFullDate();
    short Days = ReadDaysToAdd();
    Date = DateAddDays(Days, Date); 

    cout << "\nDate after adding [" << Days << "] days is: ";     
    cout << Date.Day << "/" << Date.Month << "/" << Date.Year;

    system("pause>0"); 
    return 0;
}
