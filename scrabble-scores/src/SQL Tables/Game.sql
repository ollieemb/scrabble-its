CREATE TABLE Game (
  game_id INT PRIMARY KEY,
  player1_id INT NOT NULL,
  player2_id INT NOT NULL,
  score INT NOT NULL,
  game_date DATE NOT NULL,
  game_location VARCHAR(50) NOT NULL,
  FOREIGN KEY (player1_id) REFERENCES Member(member_id),
  FOREIGN KEY (player2_id) REFERENCES Member(member_id)
);
