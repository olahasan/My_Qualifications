int past(int h, int m, int s) {
  int S =1000;
  int M =60*S;
  int H =60*M;
    return(h *H)+(m *M)+(s *S);
}
