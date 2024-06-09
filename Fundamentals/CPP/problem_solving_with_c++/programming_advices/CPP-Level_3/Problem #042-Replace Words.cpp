#include<string>
#include<iostream>
using namespace std; 


string ReplaceWordInStringUsingBuiltInFunction(string S1, string StringToReplace, string sRepalceTo) 
{
    short pos = S1.find(StringToReplace); 
    
    while (pos != std::string::npos) 
    {
        S1 = S1.replace(pos, StringToReplace.length(), sRepalceTo); 

        pos = S1.find(StringToReplace);//find next   
    } 
    return S1; 
}

int main() 
{ 
    string S1 = "Welcome to Jordan , Jordan is a nice country";
    string StringToReplace = "Jordan";
    string ReplaceTo = "USA"; 

    cout << "\nOrigial String\n" << S1;  
    cout << "\n\nString After Replace:";   
    cout << "\n" << ReplaceWordInStringUsingBuiltInFunction(S1, StringToReplace, ReplaceTo);
    
    system("pause>0"); 
}
