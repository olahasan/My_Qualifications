#include<iostream>
#include<cstdlib>
using namespace std; 

enum enCharType{ SamallLetter = 1, CapitalLetter = 2, SpecialCharacter = 3, Digit = 4 };

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
        case enCharType::CapitalLetter : 
        { 
            return char(RandomNumber(65, 90)); 
            break;     
        } 
        case enCharType::SpecialCharacter : 
        { 
            return char(RandomNumber(33, 47)); 
            break;     
        } 
        case enCharType::Digit : 
        { 
            return char(RandomNumber(48, 57)); 
            break;     
        } 
    } 
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

    Key = GenerateWord(enCharType::CapitalLetter, 4) + "-";     
    Key = Key + GenerateWord(enCharType::CapitalLetter, 4) + "-";     
    Key = Key + GenerateWord(enCharType::CapitalLetter, 4) + "-";     
    Key = Key + GenerateWord(enCharType::CapitalLetter, 4);     

    return Key; 
}

void  GenerateKeys(short NumberOfKeys) 
{ 
    for (int i = 1; i <= NumberOfKeys; i++) 
    { 
        cout << "Key [" << i << "] : "; 
        cout << GenerateKey() << endl; 
    } 
}

int main() 
{ 
    //Seeds the random number generator in C++, called only once    
    srand((unsigned)time(NULL));     
    
    GenerateKeys(ReadPositiveNumber("Pleaes enter how many keys to generate? \n "));
    return 0; 
}
