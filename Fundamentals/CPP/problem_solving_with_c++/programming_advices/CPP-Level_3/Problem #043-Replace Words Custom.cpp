#include<string>
#include<iostream>
#include<vector>
using namespace std; 


vector<string> SplitString(string S1, string Delim)
{
    vector<string> vString;

    short pos = 0;

    string sWord; // define a string variable

    // use find() function to get the position of the delimiters
    while ((pos = S1.find(Delim)) != std::string::npos)
    {
        sWord = S1.substr(0, pos); // store the word

        if (sWord != "")
        {
            vString.push_back(sWord);
        }

        S1.erase(0, pos + Delim.length());  //erase() until positon and move to next word. 
    }
    if (S1 != "")
    {
        vString.push_back(S1); // it adds last word of the string.  
    }
    return vString;
}

string JoinString(vector<string> vString, string Delim)
{
    string S1 = "";

    for (string& s : vString)
    {
        S1 += s + Delim;
    }

    return S1.substr(0, S1.length() - Delim.length());
}

string  LowerAllString(string S1) 
{ 
    for (short i = 0; i < S1.length(); i++) 
    { 
        S1[i] = tolower(S1[i]); 
    } 
    return S1; 
}

string ReplaceWordInStringUsingSplit(string S1, string StringToReplace, string sRepalceTo, bool MatchCase = true)
{ 
    vector<string> vString = SplitString(S1, " "); 
    
    for (string& s : vString) 
    { 
        if (MatchCase) 
        { 
            if (s == StringToReplace) 
            { 
                s = sRepalceTo; 
            } 
        } 
        else 
        { 
            if (LowerAllString(s) == LowerAllString(StringToReplace)) 
            { 
                s = sRepalceTo; 
            } 
        } 
    } 
    return JoinString(vString, " "); 
}

int main() 
{ 
    string S1 = "Welcome to Jordan , jordan is a nice country"; 
    string StringToReplace = "jordan";
    string ReplaceTo = "USA";  
    
    cout << "\nOriginal String:\n" << S1;  

    cout << "\n\nReplace with match case: ";    
    cout << "\n" << ReplaceWordInStringUsingSplit(S1, StringToReplace, ReplaceTo); 

    cout << "\n\nReplace with don't match case: ";    
    cout << "\n" << ReplaceWordInStringUsingSplit(S1, StringToReplace, ReplaceTo, false);  
    
    system("pause>0");
}
