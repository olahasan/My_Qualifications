// First way using for loop

using System;

public class Kata
{
  public static bool IsIsogram(string str) 
  {
            if (str == "")
                return true;
            str = str.ToLower();
            for(int i = 0; i < str.Length; i++)
            {
                for(int j = i+1; j <str.Length; j++)
                {
                    if (str[i] == str[j])
                        return false;
                }
            }
            return true;
  }
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// second way using HashSet

public static bool checkThereIsNoDoublicate(string str)
{
    if (str == "")
    {
        return true;
    }

    str = str.ToLower();

    int stringLength = str.Length;
    //Console.WriteLine($"Length of string is {stringLength}");

    HashSet<char> UniqeChar = new HashSet<char>();

    foreach (char c in str)
    {
        UniqeChar.Add(c);
    }

    int HashSetLength = UniqeChar.Count;
    //Console.WriteLine($"Length of HashSet is {HashSetLength}");

    if (HashSetLength < stringLength)
    {
        return false;
    }

    return true;
}

