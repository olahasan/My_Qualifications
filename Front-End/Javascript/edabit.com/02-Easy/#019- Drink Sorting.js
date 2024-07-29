let drinks = [
  { name: "lemonade", price: 50 },
  { name: "lime", price: 10 },
  { name: "lime", price: 5 },
];

function sortDrinkByPrice(a, b) {
  return a.price - b.price;
}

drinks.sort(sortDrinkByPrice);

console.log(drinks);    // [{ name: "lime", price: 5 }, { name: "lime", price: 10 },{ name: "lemonade", price: 50 },];
