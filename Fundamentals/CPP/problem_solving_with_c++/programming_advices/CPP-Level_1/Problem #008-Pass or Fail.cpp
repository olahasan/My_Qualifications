#include <iostream>
#include <string>
using namespace std;

enum enPassFail { Pass = 1, Fail = 2};

int ReadMark()
{
    int Mark;

    cout << "Please enter your Mark" << endl;
    cin >> Mark;

    return Mark;
}

enPassFail CheckMark(int Mark)
{
    if (Mark >= 50)
        return enPassFail::Pass;
    else
        return enPassFail::Fail;
}

void PrintResult(int Mark)
{
    if(CheckMark(Mark) == enPassFail::Pass)
        cout << "\nPassed"<< endl;
    else
        cout << "\nFailed" << endl;
}

int main()
{
    PrintResult(ReadMark());
    return 0;
}
