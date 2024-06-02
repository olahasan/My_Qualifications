#include <iostream>
#include <string>
using namespace std;


enum enOperatinType {Add = '+', Sub = '-', Mul = '*', Div = '/' };

float ReadPositiveNumber(string Message)
{
    float Number;

    do
    {
        cout << Message << endl;
        cin >> Number;

    } while (Number < 0);

    return Number;
}

enOperatinType ReadOpType()
{
    char OP = '+';
    cout << "Please Enter Operation Type(+, -, *, / )"<< endl;
    cin >> OP;

    return (enOperatinType) OP;
}

float Calculate(float Number1, float Number2, enOperatinType OpType)
{
    switch (OpType)
    {
    case enOperatinType::Add:
        return Number1 + Number2;
    case enOperatinType::Sub:
        return Number1 - Number2;
    case enOperatinType::Mul:
        return Number1 * Number2;
    case enOperatinType::Div:
        return Number1 / Number2;
    default:
        return Number1 + Number2;
    }
}

int main()
{
    float Number1 = ReadPositiveNumber("Please Enter a Positive Number as First Number");
    float Number2 = ReadPositiveNumber("Please Enter a Positive Number as Second Number");

    enOperatinType OpType = ReadOpType();

    cout << endl << "Result = " << Calculate(Number1, Number2, OpType) << endl;

    return 0;
}
