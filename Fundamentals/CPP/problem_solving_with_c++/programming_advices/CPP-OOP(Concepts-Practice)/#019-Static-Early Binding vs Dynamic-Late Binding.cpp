#include <iostream>

using namespace std;

class clsPerson
{

public:

  virtual  void Print()
    
  {
        cout << "Hi, i'm a person!\n ";
    
  }

};

class clsEmployee : public clsPerson
{
public:
    void Print()
    {
        cout << "Hi, I'm an Employee\n";
    }
};

class clsStudent : public clsPerson
{
public:
     void Print() 
    {
        cout << "Hi, I'm a student\n";
    }
};


int main()

{

    clsEmployee Employee1;
    clsStudent  Student1;
    //Early-Static Binding: at compilation time
    Employee1.Print();
    Student1.Print();

    clsPerson * Person1 = &Employee1;
    clsPerson * Person2 = &Student1;
    
    //Late-Dynamic Binding: at runtime
    Person1->Print();
    Person2->Print();


    system("pause>0");
    return 0;
}
