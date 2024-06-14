// ProgrammingAdvices.com
// Mohammed Abu-Hadhoud
#include <iostream>
#include <stack>

// STL - standard template library
using namespace std;

int main()

{
    // create a stack of ints
    stack <int> stkNumbers;

    // push into stack
    stkNumbers.push(10);
    stkNumbers.push(20);
    stkNumbers.push(30);
    stkNumbers.push(40);
    stkNumbers.push(50);

    // we can access the element by getting the top and popping
    // until the stack is empty
    cout << "count=" << stkNumbers.size() << endl;
    
    cout << "Numbers are:\n";
    while (!stkNumbers.empty()) {
        // print top element
        cout << stkNumbers.top() << "\n";

        // pop top element from stack
        stkNumbers.pop();
    }

    system("pause>0");
    return 0;
}
