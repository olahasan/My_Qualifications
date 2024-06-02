#include <iostream>
#include <string>
using namespace std;

struct stInfo
{
    string FirstName;
    string LastName;
};

stInfo ReadInfo()
{
    stInfo  Info;

    cout << "Please enter your First Name" << endl;
    cin >> Info.FirstName;

    cout << "Please enter your Last Name" << endl;
    cin >> Info.LastName;

    return Info;
}

string GetFullName(stInfo Info)
{
    return Info.FirstName + " " + Info.LastName;
}

void PrintFullNmae(string FullName)
{
    cout << "\n you FullName is: " << FullName << endl;
}

int main()
{
    PrintFullNmae(GetFullName(ReadInfo()));
    return 0;
}

