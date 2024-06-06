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

void PrintInvertedLetterPattern(int Num)
{
    int i = Num + 65-1;

    for (i ; i >= 65; i--)
    {
        for (int j = 1; j <= Num-(Num + 65 - 1-i); j++)
        {
            cout << (char)i;
        }
        cout << endl;
    }
}


int main() 
{ 
    PrintInvertedLetterPattern(ReadPositiveNumber("Please enter a Positive Number number?"));
   
    return 0; 
}
