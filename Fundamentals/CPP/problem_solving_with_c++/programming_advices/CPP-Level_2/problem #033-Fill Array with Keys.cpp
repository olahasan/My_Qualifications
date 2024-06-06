#include<iostream>
#include<cstdlib>
using namespace std; 

string  GenerateKey();

enum enCharType { SamallLetter = 1, CapitalLetter = 2, SpecialCharacter = 3, Digit = 4 };

void PrintStringArray(string arr[100], int arrLength)
{
    cout << "\nArray elements:\n\n";

    for (int i = 0; i < arrLength; i++)
    {
        cout << "Array[" << i << "] : ";
        cout << arr[i] << "\n";
    }
    cout << "\n";
}



void  GenerateKeys(short NumberOfKeys)
{
    for (int i = 1; i <= NumberOfKeys; i++)
    {
        cout << "Key [" << i << "] : " << GenerateKey() << endl;
    }
}

int RandomNumber(int From, int To)
{
    //Function to generate a random number
    int randNum = rand() % (To - From + 1) + From;
    return randNum;
}

char GetRandomCharacter(enCharType CharType)
{
    switch (CharType)
    {
    case enCharType::SamallLetter:
    {
        return char(RandomNumber(97, 122));
        break;
    }
    case enCharType::CapitalLetter:
    {
        return char(RandomNumber(65, 90));
        break;
    }
    case enCharType::SpecialCharacter:
    {
        return char(RandomNumber(33, 47));
        break;
    }
    case enCharType::Digit:
    {
        return char(RandomNumber(48, 57));
        break;
    }
    }
}

string GenerateWord(enCharType CharType, short Length)
{
    string Word;

    for (int i = 1; i <= Length; i++)
    {
        Word = Word + GetRandomCharacter(CharType);
    }

    return Word;
}

string  GenerateKey()
{
    string Key = "";

    Key = Key + GenerateWord(enCharType::CapitalLetter, 4) + "-";
    Key = GenerateWord(enCharType::CapitalLetter, 4) + "-";
    Key = Key + GenerateWord(enCharType::CapitalLetter, 4) + "-";
    Key = Key + GenerateWord(enCharType::CapitalLetter, 4);

    return Key;
}

void FillArrayWithKeys(string arr[100], int arrLength) 
{ 
    for (int i = 0; i < arrLength; i++) 
        arr[i] = GenerateKey(); 
}

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



int main() 
{ 
    //Seeds the random number generator in C++, called only once   
    srand((unsigned)time(NULL)); 
    
    string arr[100]; int  arrLength = 0;   

    arrLength = ReadPositiveNumber("How many keys do you want to generate?\n");     

    FillArrayWithKeys(arr, arrLength);    

    PrintStringArray(arr, arrLength);

    return 0; 
}
