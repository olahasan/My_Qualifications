
#include <iostream>
#include <string>

using namespace std;


class clsPerson
{
private:
    int _ID;
    string _FirstName;
    string _LastName;
    string _Email;
    string _Phone;

public:
    clsPerson(int ID, string FirstName, string LastName, string Email, string Phone)
    {
        _ID = ID;
        _FirstName = FirstName;
        _LastName = LastName;
        _Email = Email;
        _Phone = Phone;
    }

    //Get ID
    int ID()
    {
        return _ID;
    }

    //Set Get FirstName
    void SetFirstName(string FirstName)
    {
        _FirstName = FirstName;
    }
    string FirstName()
    {
        return _FirstName;
    }

    //Set Get LastName
    void SetLastName(string LastName)
    {
        _LastName = LastName;
    }
    string LastName()
    {
        return _LastName;
    }

    //Get Fullname 
    string FullName()
    {
        return  _FirstName + " " + _LastName;
    }

    //Set Get Email
    void setEmail(string Email)    
    {         
        _Email = Email;     
    } 
    string Email()     
    { 
        return _Email;     
    }

    //Set Get Phone
    void setPhone(string Phone)     
    {         
        _Phone = Phone;     
    }
    string Phone() 
    { 
        return _Phone; 
    }

    void SendEmail(string Subject, string Body)
    {
        cout << "the follwing message sent succesfully to email : " << _Email << endl;
        cout << "Subject: " << Subject << endl;
        cout << "Body: " << Body << endl << endl;
    }
    void SendSMS(string Body)
    {
        cout << "the follwing sms sent succesfully to phone : " << _Phone << endl;
        cout << Body << endl;
    }
    void Print()
    {
        cout << "\nInfo\n";
        cout << "______________________\n";
        cout << "ID       : " << _ID << endl;
        cout << "FirstName: " << _FirstName << endl;
        cout << "LastName : " << _LastName << endl;
        cout << "FullName : " << FullName() << endl;
        cout << "Email    : " << _Email << endl;
        cout << "Phone    : " << _Phone << endl;
        cout << "_______________________\n";
    }


};

int main()
{
    clsPerson person1(10, "Ola", "Ali", "my@gmail.com", "0098387727");
    person1.Print();

    person1.SendEmail("Hi", "How Are You");
    person1.SendSMS("How Are You");

    system("pause>0");
    return 0;
}

