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

bool IsIdentityMarix(int Matrix1[3][3], short Rows, short Cols) 
{ 
    //check Diagonal elements are 1 and rest elements are 0 
    for (short i = 0; i < Rows; i++)      
    {     
        for (short j = 0; j < Cols; j++)   
        { 
              //check for diagonals element 
            if (i == j && Matrix1[i][j] != 1)    
            { 
                return false;    
            } //check for rest elements 
            else if (i != j && Matrix1[i][j] != 0)    
            { 
                return false;    
            }   
        }      
    }     
    return true; 
}

int main() 
{    
    //int Matrix1[3][3]={{1,2,3},{4,5,6},{7,8,9}};

    int Matrix1[3][3] = { 
                        {1,0,0},
                        {0,1,0},
                        {0,0,1} 
                        };  

    cout<<"\nMatrix1:\n";      
    PrintMatrix(Matrix1,3,3);    

    if (IsIdentityMarix(Matrix1, 3, 3))           
        cout<<"\nYES: Matrix is identity."; 
    else          
        cout<<"\nNo: Matrix is NOT identity.";

    system("pause>0"); 
}
