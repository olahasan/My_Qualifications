
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

    do 
    {
        string PinCode = ReadPinCode();

        if (PinCode == "1234")
            return 1;
        else
        {
            cout << "\nWrong PIN";
            system("color 4f"); // turn screen to red
        }
    } while (PinCode != "1234");


}


int main()
{
    if (login())
    {
        system("color 2f");// turn screen to green
        cout << "\n Your Account Balabce is "<< 7500 << endl;
    }
    return 0;
}
