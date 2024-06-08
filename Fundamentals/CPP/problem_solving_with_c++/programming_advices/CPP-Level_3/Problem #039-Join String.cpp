#include<string>
#include<iostream>
#include<vector>
using namespace std; 


string  ReadString()
{
    string S1;

    cout << "Please Enter Your String?\n";
    getline(cin, S1);

    return S1;
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

int main() 
{ 
    vector<string> vString = { "Mohammed","Faid","Ali","Maher" };  
    
    cout << "\nVector after join: \n";   
    cout << JoinString(vString, " ");

    system("pause>0"); 
}
