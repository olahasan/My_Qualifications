#include <iostream>
#include <string>
using namespace std;


string ReadPinCode()
{
    string PinCode;
    cout << "Please Enter PIN Code\n";
    cin >> PinCode;

    return PinCode;
}

bool login()
{
    string PinCode; 
    int Counter = 3;

    do 
    {
        Counter--;
        PinCode = ReadPinCode();

        if (PinCode == "1234")
            return 1;
        else
        {
            system("color 4f"); // turn screen to red
            cout << "\nWrong PIN, You Have " << Counter << "More Tries" <<endl;
        }
    } while (Counter >= 1 && PinCode != "1234");

    return 0;
}


int main()
{
    if (login())
    {
        system("color 2f");// turn screen to green
        cout << "\n Your Account Balabce is "<< 7500 << endl;
    }
    else
    {
        cout << "\nYour Card Blocked , Call The Bank For Help" << endl;
    }
    return 0;
}
