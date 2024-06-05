#include<iostream>
#include<string>

using namespace std; 

int ReadPositiveNumber(string Message) 
{ 
    int Number = 0; 
    
    do 
    { 
        cout << Message << endl;         
        cin >> Number; 
    } 
    while (Number <= 0); 
    
    return Number; 
} 


int CountDigitFrequency(short DigitToCheck, int Number)
{
    int Remainder = 0, FreqCount = 0;

    while (Number >0)
    {
        Remainder = Number % 10;
        Number /= 10;

        if (DigitToCheck == Remainder)
            FreqCount++;
    }

    return FreqCount;
}

int main() 
{ 
    int Number = ReadPositiveNumber("Please enter the main number?"); 
    short DigitToCheck = ReadPositiveNumber("Please enter one digit to check?");

    cout << "\nDigit " << DigitToCheck << " Frequency is "  << CountDigitFrequency(DigitToCheck, Number) << " Time(s).\n" << endl;
    return 0; 
}
