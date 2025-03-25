import React from 'react';
import { User, Ticket as Cricket, Target } from 'lucide-react';

const Players = () => {
  const players = [
    {
      id: 1,
      name: 'Virat Kohli',
      team: 'Royal Challengers Bangalore',
      role: 'Batsman',
      stats: {
        matches: 237,
        runs: 7263,
        average: 37.24,
        strikeRate: 130.02,
        hundreds: 7,
        fifties: 50,
      },
    },
    {
      id: 2,
      name: 'MS Dhoni',
      team: 'Chennai Super Kings',
      role: 'Wicket-keeper Batsman',
      stats: {
        matches: 250,
        runs: 5082,
        average: 38.79,
        strikeRate: 135.93,
        hundreds: 0,
        fifties: 24,
      },
    },
    {
      id: 3,
      name: 'Jasprit Bumrah',
      team: 'Mumbai Indians',
      role: 'Bowler',
      stats: {
        matches: 120,
        wickets: 145,
        economy: 7.39,
        average: 23.31,
        bestBowling: '5/10',
      },
    },
    {
      id: 4,
      name: 'Ravindra Jadeja',
      team: 'Chennai Super Kings',
      role: 'All-rounder',
      stats: {
        matches: 226,
        runs: 2692,
        wickets: 152,
        economy: 7.61,
        average: 28.84,
      },
    },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold flex items-center gap-2">
        <User className="h-8 w-8 text-blue-600" />
        Players
      </h1>
      
      <div className="grid md:grid-cols-2 gap-6">
        {players.map((player) => (
          <div key={player.id} className="card hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                <User className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h2 className="text-xl font-bold">{player.name}</h2>
                <p className="text-gray-600 dark:text-gray-400">{player.team}</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Cricket className="h-5 w-5 text-blue-600" />
                <span className="font-semibold">{player.role}</span>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {player.role === 'Bowler' ? (
                  <>
                    <div>
                      <p className="text-gray-600 dark:text-gray-400">Matches</p>
                      <p className="font-semibold">{player.stats.matches}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 dark:text-gray-400">Wickets</p>
                      <p className="font-semibold">{player.stats.wickets}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 dark:text-gray-400">Economy</p>
                      <p className="font-semibold">{player.stats.economy}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 dark:text-gray-400">Best Bowling</p>
                      <p className="font-semibold">{player.stats.bestBowling}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <p className="text-gray-600 dark:text-gray-400">Matches</p>
                      <p className="font-semibold">{player.stats.matches}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 dark:text-gray-400">Runs</p>
                      <p className="font-semibold">{player.stats.runs}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 dark:text-gray-400">Average</p>
                      <p className="font-semibold">{player.stats.average}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 dark:text-gray-400">Strike Rate</p>
                      <p className="font-semibold">{player.stats.strikeRate}</p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Players;