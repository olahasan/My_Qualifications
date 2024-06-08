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

string  UpperFirstLetterOfEachWord(string S1) 
{
    bool isFirstLetter = true; 
    
    for (short i = 0; i < S1.length(); i++) 
    { 
        if (S1[i] != ' ' && isFirstLetter) 
        {
            S1[i] = toupper(S1[i]);
        }      
        isFirstLetter = (S1[i] == ' ' ? true : false); 
    } 
    return S1;
}

int main() 
{ 
    string S1 = ReadString();

    cout << "\nString after conversion:\n";  
    
    S1 = UpperFirstLetterOfEachWord(S1);  
    cout << S1 << endl;

    system("pause>0"); 
} 
