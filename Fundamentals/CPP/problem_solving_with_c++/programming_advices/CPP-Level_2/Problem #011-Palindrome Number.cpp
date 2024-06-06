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

int ReverseNumber(int Number)
{
    int Remainder = 0, Num2 = 0;

    while (Number > 0)
    {
        Remainder = Number % 10;
        Number /= 10;
        Num2 = Num2 * 10 + Remainder;
    }

    return Num2;
}

int IsPalindromeNumber(int Number)
{
    return Number == ReverseNumber(Number);
}



int main() 
{ 
    if(IsPalindromeNumber(ReadPositiveNumber("Please enter a Positive Number number?")))
        cout << "\nYes , it is a Palindrome number.\n";
    else
        cout << "\nNo , it is NOT a Palindrome number.\n";
    return 0; 
}
