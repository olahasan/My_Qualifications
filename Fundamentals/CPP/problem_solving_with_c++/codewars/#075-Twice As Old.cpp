int twice_as_old(int dad, int son) {
  return son == 0 ? dad : (son *2 - dad) < 0 ? (son *2 - dad)*-1 : (son *2 - dad);
}
