//ProgrammingAdivces.com
//Mohammed Abu-Hadhoud
#include<iostream>

using namespace std;

class clsA
{

public:
	int x;

	void Print()
	{
		cout << "The value of x=" << x <<endl;
	}

};


//object sent by value, any updated will not b reflected
// on the original object
void Fun1(clsA A1)
{

	A1.x = 100;
}


//object sent by reference, any updated will be reflected
// on the original object
void Fun2(clsA &A1)
{

	A1.x = 200;
}


int main() 

{
	clsA A1;

	A1.x = 50;
	cout << "\nA.x before calling function1: \n";
	A1.Print();


	//Pass by value, object will not be afected.
	Fun1(A1);
	cout << "\nA.x after calling function1 byval: \n";
	A1.Print();

	//Pass by value, object will be afected.
	Fun2(A1);
	cout << "\nA.x after calling function2 byref: \n";
	A1.Print();


	system("pause>0");

}

