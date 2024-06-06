#include<iostream>
#include<cstdlib>
using namespace std; 


int RandomNumber(int From, int To)
{
    //Function to generate a random number
    int randNum = rand() % (To - From + 1) + From;
    return randNum;
}

void FillArrayWithRandomNumbers(int arr[100], int& arrLength) 
{ 
    cout << "\nEnter number of elements:\n";     
    cin >> arrLength; 

    for (int i = 0; i < arrLength; i++) 
        arr[i] = RandomNumber(1, 100); 
}

void PrintArray(int arr[100], int arrLength) 
{ 
    for (int i = 0; i < arrLength; i++)         
        cout << arr[i] << " ";  

    cout << "\n"; 
}


int main() 
{ 
    //Seeds the random number generator in C++, called only once    
    srand((unsigned)time(NULL)); 

    int arr[100], arrLength;     

    FillArrayWithRandomNumbers(arr, arrLength);

    cout << "\narray Elements: "; 
    PrintArray(arr, arrLength); 

    return 0; 
}
