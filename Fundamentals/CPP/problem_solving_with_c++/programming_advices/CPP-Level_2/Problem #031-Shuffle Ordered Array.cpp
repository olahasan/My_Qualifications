#include<iostream>
#include<cstdlib>
using namespace std; 


int ReadPositiveNumber(string Message)
{
    int Number = 0;

    do
    {
        cout << Message << endl;
        cin >> Number;

    } while (Number <= 0);

    return Number;
}

void FillArrayWith1toN(int arr[100], int arrLength) 
{ 
    for (int i = 0; i < arrLength; i++) 
        arr[i] = i + 1; 
}

void Swap(int& A, int& B) 
{ 
    int Temp;     
    Temp = A; 
    A = B; 
    B = Temp; 
}

int RandomNumber(int From, int To)
{
    //Function to generate a random number
    int randNum = rand() % (To - From + 1) + From;
    return randNum;
}

void ShuffleArray(int arr[100], int arrLength) 
{ 
    for (int i = 0; i < arrLength; i++) 
    { 
        Swap(arr[RandomNumber(1, arrLength) - 1], arr[RandomNumber(1, arrLength) - 1]); 
    } 
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
    
    int arr[100]; 
    int arrLength = ReadPositiveNumber("\nEnter number of elements : \n");

    FillArrayWith1toN(arr, arrLength); 

    cout << "\nArray elements before shuffle:\n";     
    PrintArray(arr, arrLength);    

    ShuffleArray(arr, arrLength);     
    cout << "\nArray elements after shuffle:\n";   

    PrintArray(arr, arrLength); 
    return 0; 
}
