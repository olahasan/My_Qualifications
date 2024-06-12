int getRealFloor(int f) {
  
  return f<0||f==0 ? f:f < 13 ? f-1 : f-2;
}
