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
            cout << setw(3) << arr[i][j] << "     "; 
        }           
        cout << "\n"; 
    } 
}

void MultiplyMatrix(int Matrix1[3][3], int Matrix2[3][3], int MatrixResults[3][3], short Rows, short Cols) 
{ 
    for (short i = 0; i < Rows; i++) 
    { 
        for (short j = 0; j < Cols; j++) 
        { 
            MatrixResults[i][j] = Matrix1[i][j] * Matrix2[i][j]; 
        } 
    } 
}


int main() 
{    
    //Seeds the random number generator in C++, called only once     
    srand((unsigned)time(NULL)); 
    
    int Matrix1[3][3], Matrix2[3][3], MatrixResults[3][3];

    FillMatrixWithRandomNumbers(Matrix1, 3, 3);      
    cout<<"\nMatrix1:\n"; 

    PrintMatrix(Matrix1,3,3);          
    
    FillMatrixWithRandomNumbers(Matrix2, 3, 3);      
    
    cout<<"\nMatrix2:\n";      
    PrintMatrix(Matrix2,3,3);

    
    MultiplyMatrix(Matrix1,Matrix2,MatrixResults, 3, 3);
    cout<<"\nResults:\n";   

    PrintMatrix(MatrixResults, 3, 3); 

    system("pause>0"); 
}
