#include <iostream>
#include <string>
using namespace std;


int ReadAge()
{
    int Age;
    cout << "Please enter Age" << endl;
    cin >> Age;
    
    return Age;
}

bool ValidateNumberInRange(int Number, int from, int to)
{
    return (Number >= from && Number <= to);
}


void PrintResult(int Age)
{
    if(ValidateNumberInRange(Age, 18, 45))
        cout << Age << " Is A Valid Age" << endl;
    else
        cout << Age << " Is NOT A Valid Age" << endl;
}


int main()
{
    PrintResult(ReadAge());
    return 0;
}
