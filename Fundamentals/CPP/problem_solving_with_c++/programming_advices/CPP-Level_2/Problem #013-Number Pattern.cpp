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

void PrintNumberPattern(int Num)
{
    for (int i = 1; i <= Num; i++)
    {
        for (int j = 1; j <= i; j++)
        {

            cout << i;
        }
        cout << endl;
    }
}


int main() 
{ 
    PrintNumberPattern(ReadPositiveNumber("Please enter a Positive Number number?"));
   
    return 0; 
}
