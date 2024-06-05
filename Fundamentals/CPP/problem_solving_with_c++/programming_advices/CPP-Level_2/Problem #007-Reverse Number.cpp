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

    while (Number >0)
    {
        Remainder = Number % 10;
        Number /= 10;
        Num2 = Num2 * 10 + Remainder;
    }

    return Num2;
}

int main() 
{ 
    cout << "\nReverse is:\n" << ReverseNumber(ReadPositiveNumber("Please enter a positive number?")) << endl;
    return 0; 
}
