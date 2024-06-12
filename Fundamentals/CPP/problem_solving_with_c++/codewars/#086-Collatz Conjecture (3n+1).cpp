unsigned int hotpo(unsigned int n){
    if (n == 0) return 0; //Optional Handler to n = 0
    int counter = 0;
    
    while (n != 1) 
      {
      if(n % 2 == 0) {n = n /2; counter++;}
      else {n = 3 * n + 1; counter ++;}
      }
    
    return counter;
}
