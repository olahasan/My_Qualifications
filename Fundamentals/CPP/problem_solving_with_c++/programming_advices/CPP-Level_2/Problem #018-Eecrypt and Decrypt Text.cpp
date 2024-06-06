#include<iostream>
#include<string>

using namespace std; 

string ReadText() 
{ 
    string Text; 

    cout << "Please enter Text?\n";     
    getline(cin, Text); 

    return Text; 
}

string  EncryptText(string Text, short EncryptionKey) 
{ 
    for (int i = 0; i <= Text.length(); i++) 
    { 
        Text[i] = char((int)Text[i] + EncryptionKey); 
    } 
    return Text; 
} 

string  DecryptText(string Text, short EncryptionKey) 
{ 
    for (int i = 0; i <= Text.length(); i++) 
    { 
        Text[i] = char((int)Text[i] - EncryptionKey); 
    } 
    return Text; 
}


int main() {
    const short EncryptionKey = 2; //this is the key.

    string TextAfterEncryption, TextAfterDecryption; 
    string Text = ReadText();   

    TextAfterEncryption = EncryptText(Text, EncryptionKey);     
    TextAfterDecryption = DecryptText(TextAfterEncryption,EncryptionKey);

    cout << "\nText Before Encryption : ";     
    cout << Text << endl;     
    cout << "Text After Encryption  : ";     
    cout << TextAfterEncryption << endl;     
    cout << "Text After Decryption  : ";     
    cout << TextAfterDecryption << endl; 
    return 0; 
}
