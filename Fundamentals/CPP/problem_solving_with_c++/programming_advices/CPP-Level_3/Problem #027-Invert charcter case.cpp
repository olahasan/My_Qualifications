#include<string>
#include<iostream>
using namespace std; 

char  ReadChar() 
{ 
    char Ch1;  

    cout << "Please Enter a Character?\n";  
    cin >> Ch1;

    return Ch1; 
}

char  InvertLetterCase(char char1) 
{
    return isupper(char1) ? tolower(char1) : toupper(char1); 
}


int main() 
{ 
    char Ch1 = ReadChar();    
    
    cout << "\nChar after inverting case:\n"; 
    Ch1 = InvertLetterCase(Ch1); 

    cout << Ch1 << endl;

    system("pause>0"); 
} 
