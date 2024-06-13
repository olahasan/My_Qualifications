
#include <iostream>
using namespace std;


class clsCalculater
{
private:

    int _Current = 0;
    int _Value = 0;

public:

    void clear()
    {
        _Value = 0;
        _Current = 0;
    }

    void Add(int Value)
    {
        _Value += _Current + Value;
    }

    void Subtract(int Value)
    {
        _Value -= _Current + Value;
    }

    void Divide(int Value)
    {
        if (Value == 0)
        {
            _Value = _Value;
        }
        else
        {
            _Value /= 2 ;
        }
    }

    void Multipluy(int Value)
    {
        _Value *= Value;
    }

    void CancelLastOperation()
    {
        _Value = _Current;
    }

    void PrintResult()
    {
        cout << "Result after __ is : " << _Value << endl;
    }

};



int main()
{
    clsCalculater Calculater1;


    Calculater1.clear();
    Calculater1.PrintResult();

    Calculater1.Add(10);
    Calculater1.PrintResult();

    Calculater1.Add(100);
    Calculater1.PrintResult();

    Calculater1.Subtract(20);
    Calculater1.PrintResult();

    Calculater1.Divide(0);
    Calculater1.PrintResult();

    Calculater1.Divide(2);
    Calculater1.PrintResult();

    Calculater1.Multipluy(3);
    Calculater1.PrintResult();

    Calculater1.CancelLastOperation();
    Calculater1.PrintResult();

    Calculater1.clear();
    Calculater1.PrintResult();

    cout << "Hello World!\n";

    system("pause>0");
    return 0;
}
