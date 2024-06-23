public class ShortLongShort
{
  public static string Solution(string a, string b)
  {
    if(a == "")
          return b;
    else if (b == "")
          return a;
    else if(a.Length == b.Length)
          return "ERROR";
    else if (a.Length < b.Length)
         return a + b + a;
    else
         return b + a + b;
  }
}
