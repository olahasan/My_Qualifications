#include <string>

std::string DNAtoRNA(std::string dna){
  
  std::string x = "";
  
  for(char d : dna)
    {
        x += (d == 'T'? d = 'U' : d);
        
    }
  return x;
}
