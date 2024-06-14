// ProgrammingAdvices.com
// Mohammed Abu-Hadhoud
#include <queue>
#include <iostream>


using namespace std;

int main()
{
    // queue container declaration
    queue<int> MyQueue1;
    queue<int> MyQueue2;

    // pushing elements into first queue
    MyQueue1.push(10);
    MyQueue1.push(20);
    MyQueue1.push(30);
    MyQueue1.push(40);

    // pushing elements into 2nd queue
    MyQueue2.push(50);
    MyQueue2.push(60);
    MyQueue2.push(70);
    MyQueue2.push(80);

    // using swap() function to swap elements of queues
    MyQueue1.swap(MyQueue2);

    // printing the first queue
    cout << "MyQueue1 = ";
    while (!MyQueue1.empty()) {
        cout << MyQueue1.front() << " ";
        MyQueue1.pop();
    }

    // printing the second queue
    cout << endl << "MyQueue2 = ";
    while (!MyQueue2.empty()) {
        cout << MyQueue2.front() << " ";
        MyQueue2.pop();
    }

    system("pause>0");

    return 0;


}
