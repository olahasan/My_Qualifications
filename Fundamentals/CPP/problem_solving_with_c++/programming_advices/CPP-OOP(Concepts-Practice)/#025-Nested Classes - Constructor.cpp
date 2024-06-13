//ProgrammingAdivces.com
//Mohammed Abu-Hadhoud

//The following code will show you how to initiate an inner-class using constructor:
#include<iostream>
using namespace std;

class clsPerson {

    string _FullName;

    class clsAddress
    {
    
    private :
        string _AddressLine1;
        string _AddressLine2;
        string _City;
        string _Country;
    public:
       
       
        clsAddress(string AddressLine1, string AddressLine2, string City, string Country)
        {
            _AddressLine1 = AddressLine1;
            _AddressLine2 = AddressLine2;
            _City = City;
            _Country= Country;

        }

        string setAddressLine1(string AddressLine1)
        {
            _AddressLine1 = AddressLine1;
        }

        string AddressLine1()
        {
           return _AddressLine1 ;
        }

        string setAddressLine2(string AddressLine2)
        {
            _AddressLine2 = AddressLine2;
        }

        string AddressLine2()
        {
            return _AddressLine2;
        }


        string setCity(string City)
        {
            _City = City;
        }

        string City()
        {
            return _City;
        }


        string setCountry(string Country)
        {
            _Country = Country;
        }

        string Country()
        {
            return _Country;
        }

        void Print()
        {
            cout << "\nAddress:\n";
            cout << _AddressLine1 << endl;
            cout << _AddressLine2 << endl;
            cout << _City << endl;
            cout << _Country << endl;
        }
    };

 

public:
   
    string setFullName(string FullName)
    {
        _FullName = FullName;
    }

    string FullName()
    {
       return _FullName ;
    }
   
    clsAddress Address =  clsAddress("", "","","");

    clsPerson(string FullName, string AddressLine1, string AddressLine2, string City, string Country)
    {
        _FullName = FullName;

        //initiate address class by it's constructor
        Address =  clsAddress (AddressLine1, AddressLine2, City, Country);

    }
};

int main()

{

    clsPerson Person1("Mohammed Abu-Hadhoud", "Building 10", "Queen Rania Street", "Amman", "Jordan");
    
    Person1.Address.Print();

    system("pause>0");
    return 0;
}
