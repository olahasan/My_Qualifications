public class DnaStrand 
    {
        public static string MakeComplement(string dna)
        {
            /* 
               we can use 
               
               StringBuilder sb = new StringBuilder();
               sb.Append();
            */
            string result = "";
            for (int i = 0; i < dna.Length; i++)
            {
                switch (dna[i])
                {
                    case 'A':
                        result += 'T';
                        break;
                    case 'T':
                        result += 'A';
                        break;
                    case 'G':
                        result += 'C';
                        break;
                    case 'C':
                        result += 'G';
                        break;
                    default:
                        // If the character is not A, T, G, or C, append it as is
                        result += dna[i];
                        break;
                }
            }
            return result;
        }
    }
