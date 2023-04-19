const { Member, Game } = require('../SQL Tables/Tables');

const john = new Member('john john', '0772882122', '01-06-2005');
const james = new Member('james james', '0172882122', '02-06-2005');
const dave = new Member('dave dave', '0272882122', '03-06-2005');

const games = [
  { opponent: 'james james', score: 21, date: '2023-04-19', location: 'London' },
  { opponent: 'Bob Johnson', score: 17, date: '2023-04-18', location: 'New York' },
  { opponent: 'Emma Davis', score: 15, date: '2023-04-17', location: 'Paris' }
];
 

john.addGame(james, 25, '2023-04-16', 'Tokyo');
john.addGame(
  {
    name: 'Bob Johnson',
    addGame(opponent, score, date, location) {},
    wins: 0,
    losses: 0,
    games: [],
    highestScore: null
  },
  21,
  '2023-04-15',
  'LA'
);
john.addGame(
  {
    name: 'Emma Davis',
    addGame(opponent, score, date, location) {},
    wins: 0,
    losses: 0,
    games: [],
    highestScore: null
  },
  19,
  '2023-04-14',
  'Berlin'
);

james.addGame(
  {
    name: 'Jane Smith',
    addGame(opponent, score, date, location) {},
    wins: 0,
    losses: 0,
    games: [],
    highestScore: null
  },
  21,
  '2023-04-13',
  'Madrid'
);
james.addGame(
  {
    name: 'Bob Johnson',
    addGame(opponent, score, date, location) {},
    wins: 0,
    losses: 0,
    games: [],
    highestScore: null
  },
  17,
  '2023-04-12',
  'Rome'
);
james.addGame(
  {
    name: 'Emma Davis',
    addGame(opponent, score, date, location) {},
    wins: 0,
    losses: 0,
    games: [],
    highestScore: null
  },
  15,
  '2023-04-11',
  'Barcelona'
);

dave.addGame(john, 22, '2023-04-10', 'Moscow');
dave.addGame(
  {
    name: 'Bob Johnson',
    addGame(opponent, score, date, location) {},
    wins: 0,
    losses: 0,
    games: [],
    highestScore: null
  },
  17,
  '2023-04-09',
  'Hong Kong'
);
dave.addGame(
  {
    name: 'Emma Davis',
    addGame(opponent, score, date, location) {},
    wins: 0,
    losses: 0,
    games: [],
    highestScore: null
  },
  15,
  '2023-04-08',
  'Sydney'
);

module.exports = { john, james, dave, games };
