#include<iostream>
using namespace std;


struct stDate{ 
             short Year; 
             short Month;
             short Day; };

bool IsDate1EqualDate2(stDate Date1, stDate Date2) 
{ 
    return  (Date1.Year == Date2.Year) ? ((Date1.Month == Date2.Month) ? ((Date1.Day == Date2.Day) ? true : false) : false) : false; 
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
    cout << "\n\n";
    stDate Date2 = ReadFullDate();
    
    if (IsDate1EqualDate2(Date1, Date2))    
        cout << "\n\nYes, Date1 is Equal To Date2."; 
    else   
        cout << "\n\nNo, Date1 is NOT Equal To Date2.";

    system("pause>0"); 
    return 0;
}
