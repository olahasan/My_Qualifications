#include<iostream>
using namespace std;

 class clsPerson
 { 
 private: 
      string _FirstName;

 public: 
      void SetFirstName(string FirstName) 
      { 
          _FirstName = FirstName; 
      } 
      string GetFirstName() 
      { 
          return _FirstName;
      } 
      __declspec(property(get = GetFirstName, put = SetFirstName)) 
      string FirstName; 
 }; 
 
 int main() {
     clsPerson Person1;  
     Person1.SetFirstName("Ola");   
     cout << Person1.GetFirstName() << endl; 
     
     //instead of the above we only write this  
     Person1.FirstName = "Ola";    
     cout << Person1.FirstName; 

     system("pause>0");
     return 0; 
 };
