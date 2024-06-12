#include<iostream>
using namespace std;

class clsPerson
{ 
    //this private and will not be accessed from outside the class
    //for internal use only 
    int x; 
public:
    string FirstName; 
    string LastName; 
    string FullName()   
    {
        return FirstName + " " + LastName;  
    } 
}; 

int main() 
{ 
    clsPerson Person1;  

    Person1.FirstName = "Ola";   
    Person1.LastName = "Ali"; 

    cout << Person1.FullName() <<endl;

    string S1;
}
