#include<iostream>
using namespace std; 



int MyFloor(float Number) 
{ 
    if (Number > 0) 
        return int(Number); 
    else 
        return int(Number) - 1; 
}


float  ReadNumber() 
{ 
    float Number;     
    
    cout << "Please enter a float  number?\n";     
    cin >> Number; 
    
    return Number; 
}



int main() 
{ 
    float Number = ReadNumber();

    cout << "\nMy MyFloor Result : " << MyFloor(Number) << endl;     
    cout << "C++ floor Result  : " << floor(Number) << endl;

    return 0; 
}
