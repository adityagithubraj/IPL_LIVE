import React from 'react';
import { Brain, Star, Trophy, Sword } from 'lucide-react';

const Dream11 = () => {
  const predictions = [
    {
      id: 1,
      match: 'MI vs CSK',
      date: '2024-03-25',
      captain: 'Rohit Sharma',
      viceCaptain: 'MS Dhoni',
      mustPicks: ['Hardik Pandya', 'Ravindra Jadeja', 'Jasprit Bumrah'],
      analysis: "Mumbai's home advantage and Rohit's excellent record against CSK make him the ideal captain choice.",
    },
    {
      id: 2,
      match: 'RCB vs RR',
      date: '2024-03-26',
      captain: 'Virat Kohli',
      viceCaptain: 'Jos Buttler',
      mustPicks: ['Glenn Maxwell', 'Yuzvendra Chahal', 'Faf du Plessis'],
      analysis: "Kohli's form and the batting-friendly Chinnaswamy pitch make him the top captain pick.",
    },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold flex items-center gap-2">
        <Brain className="h-8 w-8 text-blue-600" />
        Dream11 Predictions
      </h1>
      
      <div className="space-y-6">
        {predictions.map((prediction) => (
          <div key={prediction.id} className="card hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">{prediction.match}</h2>
              <span className="text-gray-600 dark:text-gray-400">
                {new Date(prediction.date).toLocaleDateString('en-US', {
                  weekday: 'long',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Trophy className="h-6 w-6 text-yellow-500" />
                  <div>
                    <p className="text-gray-600 dark:text-gray-400">Captain</p>
                    <p className="font-bold text-lg">{prediction.captain}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <Sword className="h-6 w-6 text-blue-600" />
                  <div>
                    <p className="text-gray-600 dark:text-gray-400">Vice Captain</p>
                    <p className="font-bold text-lg">{prediction.viceCaptain}</p>
                  </div>
                </div>
              </div>
              
              <div>
                <p className="text-gray-600 dark:text-gray-400 mb-2">Must-Pick Players</p>
                <div className="flex flex-wrap gap-2">
                  {prediction.mustPicks.map((player) => (
                    <span
                      key={player}
                      className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm flex items-center gap-1"
                    >
                      <Star className="h-4 w-4" />
                      {player}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <p className="text-gray-600 dark:text-gray-400">Analysis</p>
              <p className="mt-1">{prediction.analysis}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dream11;