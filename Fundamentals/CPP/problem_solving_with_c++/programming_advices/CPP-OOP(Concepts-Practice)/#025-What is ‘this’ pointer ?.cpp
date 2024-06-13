
//ProgrammingAdvices.com
//Mohammed Abu-Hadhoud

#include <iostream>  
using namespace std;

class clsEmployee 

{

public:
    int ID;     
    string Name; 
    float Salary;

    clsEmployee (int ID, string Name, float Salary)
    {
       this->ID = ID;
       this->Name = Name;
       this->Salary = Salary;

    }

    static void Func1(clsEmployee Employee)
    {

        Employee.Print();

    }

    void Func2()

    {
        Func1( *this );


    }

    void Print()
    {
        cout << ID << "  " << Name << "  " << Salary << endl;
      // cout << this->ID << "  " << this->Name << "  " << this->Salary << endl;
       
    }

};

int main(void) 

{
    clsEmployee Employee1 (101, "Ali", 5000); 
    Employee1.Print();

    Employee1.Func2();

    return 0;
}
