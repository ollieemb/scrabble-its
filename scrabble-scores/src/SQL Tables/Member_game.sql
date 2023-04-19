CREATE TABLE Member_game(
  member_id INT NOT NULL,
  game_id INT NOT NULL,
  game_winner BOOLEAN NOT NULL,
  FOREIGN KEY (member_id) REFERENCES Member(member_id),
  FOREIGN KEY (game_id) REFERENCES Game(game_id),
  PRIMARY KEY (member_id, game_id)
);