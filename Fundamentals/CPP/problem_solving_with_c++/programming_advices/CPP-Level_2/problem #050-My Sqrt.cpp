#include<iostream>
using namespace std; 

int MySqrt(float Number) 
{ 
    return pow(Number, 0.5);
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

    cout << "\nMy MySqrt Result : " << MySqrt(Number) << endl;     
    cout << "C++ sqrt Result: " << sqrt(Number) << endl;

    return 0; 
}
