int nthEven(int n) {
  int x = 0;
  
  for (int i = 1; i < n; i++) {
    x += 2;
  }
    
  return x;
}
