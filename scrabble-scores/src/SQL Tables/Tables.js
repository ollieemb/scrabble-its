class Member {
  constructor(name, contactNumber, joinDate) {
    this.name = name;
    this.contactNumber = contactNumber;
    this.joinDate = joinDate;
    this.wins = 0;
    this.losses = 0;
    this.games = [];
    this.highestScore = null;
  }

  addGame(opponent, score) {
    const game = new Game(this, opponent, score, date, location);
    this.games.push(game);

    if (this.highestScore === null || score > this.highestScore.score) {
      this.highestScore = {
        score: score,
        date: date,
        location: location,
        opponent: opponent.name

      }
    }

    if (score > opponent.score) {
      this.wins++;
      opponent.losses++
    } else {
      opponent.wins++;
      this.losses++
    }
    }

    getAverageScore() {
      if(this.games.length === 0){
        return 0;
      }
      return this.totalScore / this.games.length;
    }

    getHighestScore(){
      return this.highestScore;
    }

  }



class Game {
  constructor(player1, player2, score, date, location) {
    this.player1 = player1;
    this.player2 = player2;
    this.score = score;
    this.date = date;
    this.location = location;
  }
}



module.exports{Member, Game};