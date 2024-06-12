#include <iostream>

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

    //Read Only Property
    int ID()
    {
        return _ID;
    }

    //Property Set
    void setFirstName(string FirstName)
    {
        _FirstName = FirstName;
    }

    //Property Get
    string FirstName()
    {
        return _FirstName;
    }

    //Property Set
    void setLastName(string LastName)
    {
        _LastName = LastName;
    }

    //Property Get
    string LastName()
    {
        return _LastName;
    }

    //Property Set
    void setEmail(string Email)
    {
        _Email = Email;
    }

    //Property Get
    string Email()
    {
        return _Email;
    }

    //Property Set
    void setPhone(string Phone)
    {
        _Phone = Phone;
    }

    //Property Get
    string Phone()
    {
        return _Phone;
    }

    string FullName()
    {
        return _FirstName + " " + _LastName;
    }

    void Print()
    {
        cout << "\nInfo:";
        cout << "\n___________________";
        cout << "\nID       : " << _ID;
        cout << "\nFirstName: " << _FirstName;
        cout << "\nLastName : " << _LastName;
        cout << "\nFull Name: " << FullName();
        cout << "\nEmail    : " << _Email;
        cout << "\nPhone    : " << _Phone;
        cout << "\n___________________\n";

    }

    void SendEmail(string Subject, string Body)
    {

        cout << "\nThe following message sent successfully to email: " << _Email;
        cout << "\nSubject: " << Subject;
        cout << "\nBody: " << Body << endl;

    }

    void SendSMS(string TextMessage)
    {
        cout << "\nThe following SMS sent successfully to phone: " << _Phone;
        cout << "\n" << TextMessage << endl;
    }


};

class clsEmployee : public clsPerson
{

private:
    string _Title;
    string _Department;
    float _Salary;

public:

    clsEmployee(int ID, string FirstName, string LastName, string Email, string Phone, string Title, string Department, float Salary)
        : clsPerson(ID, FirstName, LastName, Email, Phone)

    {

        _Title = Title;
        _Department = Department;
        _Salary = Salary;

    }

    //Property Set
    void setTitle(string Title)
    {
        _Title = Title;
    }

    //Property Get
    string Title()
    {
        return _Title;
    }

    //Property Set
    void setDepartment(string Department)
    {
        _Department = Department;
    }

    //Property Get
    string Department()
    {
        return _Department;
    }

    //Property Set
    void setSalary(float Salary)
    {
        _Salary = Salary;
    }

    //Property Get
    float Salary()
    {
        return _Salary;
    }

    void Print()
    {

        cout << "\nInfo:";
        cout << "\n___________________";
        cout << "\nID        : " << ID();
        cout << "\nFirstName : " << FirstName();
        cout << "\nLastName  : " << LastName();
        cout << "\nFull Name : " << FullName();
        cout << "\nEmail     : " << Email();
        cout << "\nPhone     : " << Phone();

        cout << "\nTitle     : " << _Title;
        cout << "\nDepartment: " << _Department;
        cout << "\nSalary    : " << _Salary;

        cout << "\n___________________\n";

    }

};

class clsDeveloper : public clsEmployee

{

private:
    string _MainProgrammingLanguage;

public:

    clsDeveloper(int ID, string FirstName, string LastName, string Email, string Phone, string Title,
        string Department, float Salary, string MainProgrammingLanguage)
        : clsEmployee(ID, FirstName, LastName, Email, Phone, Title, Department, Salary)

    {
        _MainProgrammingLanguage = MainProgrammingLanguage;
    }

    //Property Set
    void setMainProgrammingLanguage(string MainProgrammingLanguage)
    {
        _MainProgrammingLanguage = MainProgrammingLanguage;
    }

    //Property Get
    string MainProgrammingLanguage()
    {
        return _MainProgrammingLanguage;
    }

    void Print()
    {

        cout << "\nInfo:";
        cout << "\n___________________";
        cout << "\nID        : " << ID();
        cout << "\nFirstName : " << FirstName();
        cout << "\nLastName  : " << LastName();
        cout << "\nFull Name : " << FullName();
        cout << "\nEmail     : " << Email();
        cout << "\nPhone     : " << Phone();

        cout << "\nTitle     : " << Title();
        cout << "\nDepartment: " << Department();
        cout << "\nSalary    : " << Salary();
        cout << "\nPLanguage : " << MainProgrammingLanguage();
        cout << "\n___________________\n";

    }

};

int main()

{

    clsDeveloper Developer1(10, "Ola", "Ali", "A@a.com", "8298982", "Web Developer",
        "ProgrammingAdvices", 5000, "C++");

    Developer1.Print();

    Developer1.SendSMS("Hi mr Developer :-)");


    system("pause>0");
    return 0;
}
