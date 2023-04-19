const express = require('express');
const {Pool} = require('pg');
const bodyParser = require('body-parser');

const {Members, Game} = require('../SQL Tables/Tables')
const {membersData} = require('../sampleData/members')
const {games} = require('../sampleData/member-game')


const pool = new Pool({
  user: 'sample',
  host: 'sample',
  database: 'sample',
  password: 'sample',
  port: 5432
});

pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/members', async (req, res) => {
  try{
  const result = await pool.query('SELECT * FROM member');
  res.json(result.rows);
} catch (err) {
  console.log(err)
  res.status(500).send('Internal Server Error')
}
}
)

app.post('/members', async (req, res) => {
  const {member_name, contact_number, join_date} = req.body;

  try{
    const result = await pool.query(
      'INSERT INTO member (member_name, contact_number, join_date) values ($1, $2, $3) RETURNING *',
      [member_name, contact_number, join_date]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal Server Error');
  }
  }
)

app.get('/members/:id', async (req, res) => {
  const member_id = req.params.id;
  try{
    const result = await pool.query('SELECT * FROM member WHERE id = $1', [member_id]);
    if(result.rows.length === 0) {
      return res.status(404).json({error: 'Member ID not found'});
    }
    res.json(result.rows[0]);
  }
  catch (err) {
    console.log(err)
  res.status(500).send('Internal Server Error');

  }
});

app.post('/members/:id/games', async (req, res) => {
  const {id} = req.params;
  const {opponent_id, score} = req.body;

  try{
    const member = await pool.query('SELECT * FROM member WHERE id = $1', [id]);

    if(member.rows.length === 0) {
      return res.status(404).send('Member not found');
    }
    const opponent = await pool.query('SELECT * FROM member WHERE id =$1', [opponent_id]);

    if(opponent.rows.length === 0){
      return res.status(404).send('Opponent not found');
    }
    
    const newGame = new Game(member.rows[0], opponent.rows[0], score);
    member.rows[0].addGame(opponent.rows[0], score)

    const result = await pool.query(
      'INSERT * INTO games (player1_id, player2_id, player1_score, player2_score) values ($1, $2, $3, $4) RETURNING *' ,
      [member.rows[0].id, opponent.rows.id, score, opponent.rows[0].score]
    );
    res.json(result.rows[0]);
  } catch (err){
    console.log(err);
    res.status(500).send('Internal Server Error')
  }
}
)

app.get('/members/:id/highest-score', async (req, res) => {
  const {id} = req.params;

  try {
    const member = await pool.query('SELECT * FROM member WHERE id =$1', [id]);

    if(member.rows.length === 0){
      return res.status(404).send('Member not found')
    }

      const highestScore = member.rows[0].highestScore;

      res.json(highestScore);
    
  } catch (err)  {
      console.log(err);
          res.status(500).send('Internal Server Error')

    }
  })


  app.post('/games', async (req, res) => {
    const { player1Id, player2Id, score, date, location } = req.body;


   try{


      const game = new Game(player1.rows[0], player2.rows[0], score, date, location);

     
    player1.rows[0].addGame(player2.rows[0], score);
    player2.rows[0].addGame(player1.rows[0], score);


      const newGame = await pool.query(
        'INSERT INTO game (player1Id, player2Id, score) values ($1, $2, $3, $4, $5, $6) RETURNING *'
        [player1Id, player2Id, score, opponentScore, date, location]
      );
      res.json(newGame.rows[0]);
    } catch (err) {
      console.log(err);
      res.status(500).send('Internal Server Error');
    }
  });

