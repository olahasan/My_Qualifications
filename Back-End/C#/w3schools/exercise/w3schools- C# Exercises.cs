1- C# Syntax:

static void Main(string[] args)
{
    Console.WriteLine("Hello World!");
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
2- C# Comments:

//This is a single-line comment
/*
    This is a multi-line comment 
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
3- C# variables

- int myNum = 50;
- string myName = "John";

- int x = 5;
  int y = 10;
  Console.WriteLine(x + y);

- int x = 5;
  int y = 10;
  int z = x + y;
  Console.WriteLine(z);

- int x = 5, y = 6, z = 50;
  Console.WriteLine(x + y + z);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
4- C# data types:

- int myNum = 9;
  double myDoubleNum = 8.99;
  char myLetter = 'A';
  bool myBoolean = false;
  string myText = "Hello World";

- bool yay = true;
  bool nay = false;

- string greeting = "Hello";
  Console.WriteLine(greeting); 

- int myInt = 10;
  Console.WriteLine(Convert.ToString(myInt));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
5- C# user input:

- Console.WriteLine("Enter username:");
  string userName = Console.ReadLine();
  Console.WriteLine("Username is: " + userName); 

- Console.WriteLine("Think of a number:");
  int myNum = Convert.ToInt32(Console.ReadLine());

  Console.WriteLine("Your number is: " + myNum);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
6- C# Operators:

- Console.WriteLine(10 * 5);
- Console.WriteLine(10 / 5);
- int x = 10;
  x++;

- int x = 10;
  x += 5; 
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
7- C# Math:

- int x = 5;
  int y = 10;
  Console.WriteLine(Math.Max(x, y));

- Console.WriteLine(Math.Sqrt(64));
- Console.WriteLine(Math.Round(2.6));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
8- C# string:

- string greeting = "Hello";

- string firstName = "John ";
  string lastName = "Doe";
  string name = firstName + lastName;
  Console.WriteLine(name);

- string myString = "Hello";
  Console.WriteLine(myString[0]);  

- string txt = "Hello";
  Console.WriteLine(txt.Length);

- string txt = "Hello World";
  Console.WriteLine(txt.ToUpper());
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
9- C# Boolens:

- bool isCodingFun = true;
  bool isFishTasty = false;
 
  Console.WriteLine(isCodingFun);
  Console.WriteLine(isFishTasty);

- int x = 10;
  int y= 9;
  Console.WriteLine(x > y);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
10- C# if ... else:

- int x = 50;
  int y = 10;
  if (x > y)
  {
    Console.WriteLine("Hello World");
  }

- int x = 50;
  int y = 50;
  if (x == y)
  {
    Console.WriteLine("Hello World");
  }

- int x = 50;
  int y = 50;
  if (x == y)
  {
    Console.WriteLine("Yes");
  }
  else
  {
    Console.WriteLine("No");
  }  

- int x = 50;
  int y = 50;
  if (x == y){Console.WriteLine("1");}
  else if (x > y){Console.WriteLine("2");}
  else{ Console.WriteLine("3");}

- int time = 20;
  string result = (time < 18) ? "Good day." : "Good evening.";
  Console.WriteLine(result);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
11- C# switch:

- int day = 2;
  switch (day)
  {
    case 1:
        Console.WriteLine("Monday");
        break;

    case 2:
        Console.WriteLine("Tuesday");

    break;
  }

- int day = 3;
  switch (day)
  {
    case 1:
        Console.WriteLine("Today is Saturday");
        break;

    case 2:
        Console.WriteLine("Today is Sunday");

        break;

    default:
        Console.WriteLine("Looking forward to the Weekend");
        break;
  }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
12- C# Loops:

- int i = 1;
  while(i < 6)
  {
    Console.WriteLine(i);
    i++;
  }

- int i = 1;
  do
  {
    Console.WriteLine(i);
    i++;
  }
  while (i < 6);

- for(int i = 0; i < 5;i++)
  {
    Console.WriteLine("Yes");
  }   

- for(int i = 0; i < 10; i++)
  {
    if (i == 5)
    {
        break;
    }
    Console.WriteLine("Yes");
  }

- for (int i = 0; i < 10; i++)
  {
    if (i == 4)
    {
        continue;
    }
    Console.WriteLine(i);
  }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
13- C# Arrays:

- string[] cars= { "Volvo", "BMW", "Ford", "Mazda" };

- string[] cars = { "Volvo", "BMW", "Ford", "Mazda" };
  Console.WriteLine(cars[1]);

- string[] cars = { "Volvo", "BMW", "Ford", "Mazda" };
  cars[0] = "Opel";
  Console.WriteLine(cars[0]);

- string[] cars = { "Volvo", "BMW", "Ford", "Mazda" };
  foreach (string i in cars)
  {
    Console.WriteLine(i);
  }

- string[] cars = { "Volvo", "BMW", "Ford", "Mazda" };
  Array.Sort(cars);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
14- C# Methods:

-  static void MyMethod()
   {
    Console.WriteLine("I just got executed!");
   }
   static void Main(string[] args)
   {
      MyMethod();
   }

-  static void MyMethod()
   {
     Console.WriteLine("I just got executed!");
   }
   static void Main(string[] args)
   {
     MyMethod();
     MyMethod();
   }

- static void MyMethod(string fname)
  {
    Console.WriteLine(fname + " Refsnes");
  }
  static void Main(string[] args)
  {
    MyMethod("Liam");
    MyMethod("Jenny");
    MyMethod("Anja");
  } 

- static int MyMethod(int x)
  {
    return  5 + x;
  }
  static void Main(string[] args)
  {
    Console.WriteLine(MyMethod(3));
  }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
15- C# Classes/Objects:

- Create a class called MyClass.  
    class MyClass
    
- Create an object of MyClass called myObj.
    MyClass myObj = new MyClass();

- Create an object of Car called myObj, and use it to set the value of maxSpeed to 200.

  class Car
  {
     int maxSpeed;
  
     static void Main(string[] args)
     {
  
      Car myObj = new Car();
      myObj.maxSpeed = 200;
       
      Console.WriteLine(myObj.color);
      Console.WriteLine(myObj.maxSpeed);
      }
  }  


- Call the fullThrottle() method from the object:

    class Car
    {
        public void fullThrottle()
        {
            Console.WriteLine("The car is going as fast as it can!");
        }
    
        static void Main(string[] args)
        {
            Car myObj = new Car();
            myObj. fullThrottle();
        }
    }

- Create a constructor of Car, and call it:
    class Car
    {
        public string model;
    
        public Car()
        {
            model = "Mustang";
        }
    
        static void Main(string[] args)
        {
            Car Ford = new Car();
            Console.WriteLine(Ford.model);
        }
    } 

- Use an access modifier to make the model variable NOT accessible from outside its own class.
    private string model;

- The Car class should inherit the class members from the Vehicle class.
    class Car :Vehicle
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
16- C# Exceptions:

- try
  {
    int[] myNumbers = {1, 2, 3};
    Console.WriteLine(myNumbers[10]);
  }
  catch(Exception e)
  {
    Console.WriteLine(e.Message);
  }

- try
  {
    int[] myNumbers = {1, 2, 3};
    Console.WriteLine(myNumbers[10]);
  }
  catch(Exception e)
  {
    Console.WriteLine("Something went wrong.");
  }
  finally
  {
    Console.WriteLine("The 'try catch' is finished.");
  }
