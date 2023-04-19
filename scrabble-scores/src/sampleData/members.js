
const membersData=
[
  {
    member_name: 'john john',
    contact_number: '0772882122',
    join_date: '01-06-2005',
    wins: 2,
    losses: 1,
    highestScore: 25,
    games: [
      { opponent: 'james james', score: 21 },
      { opponent: 'Bob Johnson', score: 17 },
      { opponent: 'Emma Davis', score: 15 }
    ]
  },
  {
    member_name: 'james james',
    contact_number: '0172882122',
    join_date: '02-06-2005',
    highestScore: 21,
    games: [
      { opponent: 'Jane Smith', score: 21 },
      { opponent: 'Bob Johnson', score: 17 },
      { opponent: 'Emma Davis', score: 15 }
    ]
  },
  {
    member_name: 'dave dave',
    contact_number: '0272882122',
    join_date: '03-06-2005',
    highestScore: 22,
    games: [
      { opponent: 'john john', score: 25 },
      { opponent: 'Bob Johnson', score: 17 },
      { opponent: 'Emma Davis', score: 15 }
    ]
  }
];


module.exports = {membersData};
