#include<string>
#include<iostream>
using namespace std; 

string  ReadString() 
{ 
    string S1;     

    cout << "Please Enter Your String?\n";     
    getline(cin, S1); 

    return S1; 
} 

void PrintFirstLetterOfEachWord(string S1) 
{ 
    bool isFirstLetter = true; 

    cout << "\nFirst letters of this string: \n"; 
    
    for (short i = 0; i < S1.length(); i++)  
    {
        if (S1[i] != ' ' && isFirstLetter)    
        {          
            cout << S1[i] << endl;   
        }       
        isFirstLetter = (S1[i] == ' ' ? true : false);  
    } 
} 

int main() 
{ 
    PrintFirstLetterOfEachWord(ReadString());   
    system("pause>0"); 
} 
