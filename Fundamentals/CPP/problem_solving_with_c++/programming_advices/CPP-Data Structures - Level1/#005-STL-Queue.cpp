// ProgrammingAdvices.com
// Mohammed Abu-Hadhoud
#include <queue>
#include <iostream>


//STL - standard template library
using namespace std;

int main()
{
    // Queue container declaration
    queue<int> MyQueue;

    // pushing elements into first stack
    MyQueue.push(10);
    MyQueue.push(20);
    MyQueue.push(30);
    MyQueue.push(40);

    cout << "\nCount: " << MyQueue.size();
    cout << "\nFront: " << MyQueue.front();
    cout << "\nBack: " << MyQueue.back() << endl;

    cout << "\nMyQueue = ";
    while (!MyQueue.empty())
    {
        cout << MyQueue.front() << " ";
        MyQueue.pop();
        
    }
   
    system("pause>0");

    return 0;


}
