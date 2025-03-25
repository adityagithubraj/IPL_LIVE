import React from 'react';
import { Users, Trophy, Star } from 'lucide-react';

const Teams = () => {
  const teams = [
    {
      id: 1,
      name: 'Mumbai Indians',
      titles: 5,
      captain: 'Hardik Pandya',
      keyPlayers: ['Rohit Sharma', 'Jasprit Bumrah', 'Suryakumar Yadav'],
      homeGround: 'Wankhede Stadium, Mumbai',
      color: 'blue',
    },
    {
      id: 2,
      name: 'Chennai Super Kings',
      titles: 5,
      captain: 'MS Dhoni',
      keyPlayers: ['Ravindra Jadeja', 'Ruturaj Gaikwad', 'Devon Conway'],
      homeGround: 'M. A. Chidambaram Stadium, Chennai',
      color: 'yellow',
    },
    {
      id: 3,
      name: 'Royal Challengers Bangalore',
      titles: 0,
      captain: 'Faf du Plessis',
      keyPlayers: ['Virat Kohli', 'Glenn Maxwell', 'Mohammed Siraj'],
      homeGround: 'M.Chinnaswamy Stadium, Bangalore',
      color: 'red',
    },
    {
      id: 4,
      name: 'Gujarat Titans',
      titles: 1,
      captain: 'Shubman Gill',
      keyPlayers: ['Rashid Khan', 'Mohammed Shami', 'Kane Williamson'],
      homeGround: 'Narendra Modi Stadium, Ahmedabad',
      color: 'blue',
    },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold flex items-center gap-2">
        <Users className="h-8 w-8 text-blue-600" />
        IPL Teams
      </h1>
      
      <div className="grid md:grid-cols-2 gap-6">
        {teams.map((team) => (
          <div key={team.id} className="card hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">{team.name}</h2>
              <div className="flex items-center gap-1">
                <Trophy className="h-5 w-5 text-yellow-500" />
                <span className="font-semibold">{team.titles}</span>
              </div>
            </div>
            
            <div className="space-y-3">
              <div>
                <p className="text-gray-600 dark:text-gray-400">Captain</p>
                <p className="font-semibold">{team.captain}</p>
              </div>
              
              <div>
                <p className="text-gray-600 dark:text-gray-400">Key Players</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {team.keyPlayers.map((player) => (
                    <span
                      key={player}
                      className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm flex items-center gap-1"
                    >
                      <Star className="h-4 w-4" />
                      {player}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <p className="text-gray-600 dark:text-gray-400">Home Ground</p>
                <p className="font-semibold">{team.homeGround}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;