#include<iostream>
using namespace std;
 
class clsPerson
{ 
  public: 
      string FullName; 

      //This is Instructor will be called when object is built.  
      clsPerson() 
      { 
          FullName = "Ola Ali"; 
          cout << "\nHi, I'm Constructor";    
      } 

      //This is destructor will be called when object is destroyed.   
      ~clsPerson()
      {       
          cout << "\nHi, I'm Destructor";    
      } 
};

void Fun1() 
{ 
    clsPerson Person1; 
    //after exiting from function, person1 will be 
    //destroyed and destructor will be called.
} 

void Fun2()
{
    clsPerson* Person2 = new clsPerson; 
    //always use delete whenever you use new, otherwise object will remain in memory 
    delete Person2;
}

int main() 
{ 
    Fun1();
    Fun2(); 

    system("pause>0"); 
    return 0; 
}
