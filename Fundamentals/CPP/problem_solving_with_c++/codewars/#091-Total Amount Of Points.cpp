using namespace std;

int points(const array<string, 10>& games) {
  
 int x = 0;
  
    for (const std::string& match : games) {
      
        int colonIndex = match.find(':');
        int ourScore = std::stoi(match.substr(0, colonIndex));
        int opponentScore = std::stoi(match.substr(colonIndex + 1));
        
        if (ourScore > opponentScore) {
            x += 3;  // Win
        } else if (ourScore == opponentScore) {
            x += 1;  // Tie
        }
    }
  
    return x;
}
