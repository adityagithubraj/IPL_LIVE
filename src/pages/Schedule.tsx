import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Schedule = () => {
  const matches = [
    {
      id: 1,
      date: '2024-03-25',
      time: '19:30',
      team1: 'Mumbai Indians',
      team2: 'Delhi Capitals',
      venue: 'Wankhede Stadium, Mumbai',
    },
    {
      id: 2,
      date: '2024-03-26',
      time: '19:30',
      team1: 'Chennai Super Kings',
      team2: 'Kolkata Knight Riders',
      venue: 'M. A. Chidambaram Stadium, Chennai',
    },
    {
      id: 3,
      date: '2024-03-27',
      time: '19:30',
      team1: 'Royal Challengers Bangalore',
      team2: 'Punjab Kings',
      venue: 'M.Chinnaswamy Stadium, Bangalore',
    },
    {
      id: 4,
      date: '2024-03-28',
      time: '19:30',
      team1: 'Gujarat Titans',
      team2: 'Rajasthan Royals',
      venue: 'Narendra Modi Stadium, Ahmedabad',
    },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold flex items-center gap-2">
        <Calendar className="h-8 w-8 text-blue-600" />
        Match Schedule
      </h1>
      
      <div className="space-y-4">
        {matches.map((match) => (
          <div key={match.id} className="card hover:shadow-lg transition-shadow">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg">
                  <Calendar className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="font-semibold text-lg">{match.team1} vs {match.team2}</p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {new Date(match.date).toLocaleDateString('en-US', { 
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })} - {match.time} IST
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <MapPin className="h-5 w-5" />
                <span>{match.venue}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;