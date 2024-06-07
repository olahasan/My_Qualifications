#include<iostream>
using namespace std; 

float GetFractionPart(float Number) 
{ 
    return Number - int(Number); 
} 

int MyCeil(float Number) 
{ 
    if (abs(GetFractionPart(Number)) > 0) 
        if (Number > 0) 
            return int(Number) + 1; 
        else 
            return int(Number); 
    else 
        return Number; 
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

    cout << "\nMy MyCeil Result : " << MyCeil(Number) << endl;     
    cout << "C++ ceil Result: " << ceil(Number) << endl;

    return 0; 
}
