function footballPoints(wins, draws, losses) {
   if (typeof wins !== "number"|| typeof draws !== "number" || typeof losses !== "number") {
    return "Sorry, should enter a number";
  } else {
    return (wins * 3) + (draws * 1) + (losses * 0);
  }
}
