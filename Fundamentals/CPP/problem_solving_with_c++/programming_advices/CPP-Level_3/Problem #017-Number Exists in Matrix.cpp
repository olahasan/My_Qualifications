#include<iostream>
#include<string>
#include<iomanip>
using namespace std; 

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


bool IsNumberInMatrix(int Matrix1[3][3], int Number, short Rows, short Cols) 
{ 
    short NumberCount = 0; 
    
    for (short i = 0; i < Rows; i++) 
    { 
        for (short j = 0; j < Cols; j++) 
        { 
            if (Matrix1[i][j] == Number) 
            { 
                return true; 
            }; 
        } 
    }     
    return false; 
}

int main() 
{    
    int Matrix1[3][3] = { 
                            {77,5,12},
                            {22,20,1},
                            {1,0,9} 
                        };
    
    cout << "\nMatrix1:\n";      
    PrintMatrix(Matrix1, 3, 3);    
    
    int Number;      
    cout << "\nPlease Enter the number to look for in matrix? ";     
    cin >> Number; 
    
     if (IsNumberInMatrix(Matrix1, Number, 3, 3))           
        cout<<"\nYes it is there.\n"; 
    else          
        cout<<"\nNo: It's NOT there.\n";

    system("pause>0"); 
}
