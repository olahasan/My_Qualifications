std::vector<int> divisible_by(std::vector<int> numbers, int divisor)
{
  std::vector<int> All;
  
  for(int num : numbers)
    {
        if(num % divisor == 0)
          {
              All.push_back(num);
          } 
    }
  
    return All;
}
