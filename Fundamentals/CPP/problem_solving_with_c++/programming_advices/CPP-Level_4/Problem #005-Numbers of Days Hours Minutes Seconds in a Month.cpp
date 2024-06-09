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

    if (Month == 2) 
    {   
        return  IsLeapYear(Year) ? 29 : 28; 
    } 
    
    short arr31Days[7] = { 1,3,5,7,8,10,12 }; 

    for (short i = 1; i <= 7; i++) 
    { 
        if (arr31Days[i - 1] == Month) 
            return 31; 
    } 

    //if you reach here then its 30 days. 
    return  30; 
} 

short NumberOfHoursInAMonth(short Month, short Year) 
{
    return  NumberOfDaysInAMonth(Month, Year) * 24; 
} 
int NumberOfMinutesInAMonth(short Month, short Year) 
{ 
    return  NumberOfHoursInAMonth(Month, Year) * 60; 
}
int NumberOfSecondsInAMonth(short Month, short Year) 
{ 
    return  NumberOfMinutesInAMonth(Month, Year) * 60; 
} 

short ReadMonth() 
{
    short Month;  

    cout << "\nPlease enter a Month to check? ";  
    cin >> Month; 

    return Month;
}

short ReadYear() 
{
    short Year; 

    cout << "\nPlease enter a year to check? ";  
    cin >> Year; 
    
    return Year; 
}

int main() 
{ 
    short Year = ReadYear(); 
    short Month = ReadMonth(); 

    cout << "\nNumber of Days    in Month [" << Month << "] is " << NumberOfDaysInAMonth(Month, Year);   
    cout << "\nNumber of Hours   in Month [" << Month << "] is " << NumberOfHoursInAMonth(Month, Year);  
    cout << "\nNumber of Minutes in Month [" << Month << "] is " << NumberOfMinutesInAMonth(Month, Year);  
    cout << "\nNumber of Seconds in Month [" << Month << "] is " << NumberOfSecondsInAMonth(Month, Year);

    system("pause>0"); 
    return 0;
}
