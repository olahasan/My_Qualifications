int repeats(std::vector<int>v){
  
  int Sum = 0;
  for(int i : v)
    {
      int count = 0;

        for(int s : v)
          {
            if (s == i)
              count++;
          }
           if(count < 2)
              Sum += i;
    }
  return Sum;
}
