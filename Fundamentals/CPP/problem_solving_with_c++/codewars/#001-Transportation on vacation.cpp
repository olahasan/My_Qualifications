int rental_car_cost(int d){
  
   int total = d * 40;
  
   return d >= 7 ? total - 50 : d >= 3 ? total - 20 : d <= 0 ? 0 : total;
     
}
