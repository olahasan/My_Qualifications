int basicOp(char op, int val1, int val2) {
  
  int x = 0;
 switch(op)
   {
     case '+':
      x = val1 + val2;
      break;
     
     case '-' :
      x = val1 - val2;
      break;
     
     case '*' :
      x = val1 * val2;
      break;
     
     default :
      x = val1 / val2;
      break;
   }
  
  return x;
}
