#include <iostream>
#include <string>
using namespace std;


struct stPiggyBankContenet
{
    int  Pennies, Nickels, Dimes, Quarters, Dollars;
};

stPiggyBankContenet ReadPiggyBankContent()
{
    stPiggyBankContenet PiggyBankContent;

    cout << "Please Enter a Total Pennies " << endl;
    cin >> PiggyBankContent.Pennies;

    cout << "Please Enter a Total Nickels " << endl;
    cin >> PiggyBankContent.Nickels;

    cout << "Please Enter a Total Dimes " << endl;
    cin >> PiggyBankContent.Dimes;

    cout << "Please Enter a Total Quarters " << endl;
    cin >> PiggyBankContent.Quarters;

    cout << "Please Enter a Total Dollars " << endl;
    cin >> PiggyBankContent.Dollars;

    return PiggyBankContent;
}


int CalculateTotalPennies(stPiggyBankContenet PiggyBankContent)
{
    int TotalPenies = PiggyBankContent.Pennies * 1 +
        PiggyBankContent.Nickels * 5 +
        PiggyBankContent.Dimes * 10 +
        PiggyBankContent.Quarters * 25 +
        PiggyBankContent.Dollars * 100;

    return TotalPenies;
}


int main()
{
    int TotalPennies = CalculateTotalPennies(ReadPiggyBankContent());
    
    cout << endl <<"Total Pennies = " << TotalPennies << endl;
    cout << endl << "Total Dollars = " << (float)TotalPennies / 100 << endl;

    return 0;
}
