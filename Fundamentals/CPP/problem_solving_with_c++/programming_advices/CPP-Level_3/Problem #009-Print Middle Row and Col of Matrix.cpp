#include<iostream>
#include<string>
#include<iomanip>
using namespace std; 

int RandomNumber(int From, int To)
{
    //Function to generate a random number
    int randNum = rand() % (To - From + 1) + From;
    return randNum;
}

void FillMatrixWithRandomNumbers(int arr[3][3], short Rows, short Cols)
{
    for (short i = 0; i < Rows; i++)
    {
        for (short j = 0; j < Cols; j++)
        {
            arr[i][j] = RandomNumber(1, 10);
        }
    }
}


void PrintMatrix(int arr[3][3], short Rows, short Cols) 
{ 
    for (short i = 0; i < Rows; i++) 
    { 
        for (short j = 0; j < Cols; j++) 
        { 
            //cout << setw(3) << arr[i][j] << "     "; 
            printf(" %0*d   ", 2, arr[i][j]);
        }           
        cout << "\n"; 
    } 
}


void PrintMiddleRowOfMatrix(int arr[3][3], short Rows, short Cols) 
{ 
    short MiddleRow = Rows / 2; 
    
    for (short j = 0; j < Cols; j++) 
    { 
        printf(" %0*d   ", 2, arr[MiddleRow][j]); 
    }          
    cout << "\n"; 
} 

void PrintMiddleColOfMatrix(int arr[3][3], short Rows, short Cols) 
{ 
    short MiddleCol = Cols / 2; 
    
    for (short j = 0; j < Rows; j++) 
    { 
        printf(" %0*d   ", 2, arr[j][MiddleCol]); 
    }          
    cout << "\n"; 
}


int main() 
{    
    //Seeds the random number generator in C++, called only once     
    srand((unsigned)time(NULL)); 
    
    int Matrix1[3][3];

    FillMatrixWithRandomNumbers(Matrix1, 3, 3);      
    cout<<"\nMatrix1:\n"; 

    PrintMatrix(Matrix1,3,3);          
    
    cout << "\nMiddle Row of Matrix1 is:\n";      
    PrintMiddleRowOfMatrix(Matrix1, 3, 3);   

    cout << "\nMiddle Col of Matrix1 is:\n";      
    PrintMiddleColOfMatrix(Matrix1, 3, 3);

    system("pause>0"); 
}
