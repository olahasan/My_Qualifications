
//ProgrammingAdvices.com
//Mohammed Abu-Hadhoud

#include<iostream>
using namespace std;

class clsA
{
private:
    int _Var1;

protected:
    int _Var3;

public:
    int Var2;
    
    clsA()
    {
        _Var1 = 10;
        Var2 = 20;
        _Var3 = 30;

    }
    //this will grant access for everything to class B 
    friend class clsB;    //friend class 

};

class clsB
{
public:
    void display(clsA A1)
    {
        cout << endl << "The value of Var1=" << A1._Var1 ;
        cout << endl << "The value of Var2=" << A1.Var2  ;
        cout << endl << "The value of Var3=" << A1._Var3 ;
    }
};

int main()
{
    clsA A1;
    clsB B1;

    B1.display(A1);
    
    system("pause>0");

    return 0;
};
