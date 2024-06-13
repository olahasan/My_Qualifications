#include <iostream>

using namespace std;

class clsPerson
{

public:

    string FullName = "Ola Ali";

};

class clsEmployee : public clsPerson
{

public:
    string Title = "CEO";

};

int main()

{

    clsEmployee Employee1;

    cout << Employee1.FullName << endl;

    ////upcasting
    //this will convert employee to person.
    clsPerson* Person1 = &Employee1;
    cout << Person1->FullName << endl;


    //clsPerson Person2;
    //cout << Person2.FullName << endl;

    ////downcasting : you cannot convert person to employee
    // 
    //clsEmployee* Employee2 = &Person2;



    system("pause>0");
    return 0;
}
