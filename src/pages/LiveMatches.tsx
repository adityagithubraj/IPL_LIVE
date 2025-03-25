import React from 'react';
import { Trophy, Clock } from 'lucide-react';

const LiveMatches = () => {
  const liveMatches = [
    {
      id: 1,
      team1: { name: 'Mumbai Indians', score: '186/4', overs: '18.2' },
      team2: { name: 'Chennai Super Kings', score: '165/5', overs: '16.4' },
      status: 'Live',
      venue: 'Wankhede Stadium, Mumbai',
    },
    {
      id: 2,
      team1: { name: 'Royal Challengers Bangalore', score: '145/3', overs: '15.0' },
      team2: { name: 'Rajasthan Royals', score: '-', overs: '-' },
      status: 'Live',
      venue: 'M.Chinnaswamy Stadium, Bangalore',
    },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold flex items-center gap-2">
        <Trophy className="h-8 w-8 text-blue-600" />
        Live Matches
      </h1>
      
      <div className="grid md:grid-cols-2 gap-6">
        {liveMatches.map((match) => (
          <div key={match.id} className="card border-2 border-blue-500">
            <div className="flex items-center justify-between mb-4">
              <span className="flex items-center text-red-500">
                <Clock className="h-5 w-5 mr-1" /> LIVE
              </span>
              <span className="text-sm text-gray-600 dark:text-gray-400">{match.venue}</span>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-bold text-lg">{match.team1.name}</span>
                <span className="text-xl font-semibold">{match.team1.score}</span>
                <span className="text-sm text-gray-600">({match.team1.overs} ov)</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="font-bold text-lg">{match.team2.name}</span>
                <span className="text-xl font-semibold">{match.team2.score}</span>
                <span className="text-sm text-gray-600">({match.team2.overs} ov)</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveMatches;