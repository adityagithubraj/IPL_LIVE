import React from 'react';
import { Trophy, Users, Calendar, Brain } from 'lucide-react';

const Home = () => {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative h-[400px] rounded-xl overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=1920&q=80"
          alt="IPL Stadium"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 flex items-center">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Welcome to IPL Hub
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              Your ultimate destination for live IPL scores, match predictions,
              and comprehensive cricket analysis.
            </p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="card">
          <Trophy className="h-12 w-12 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Live Matches</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Real-time scores and match updates from ongoing IPL games
          </p>
        </div>

        <div className="card">
          <Users className="h-12 w-12 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Team Stats</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Comprehensive team and player statistics
          </p>
        </div>

        <div className="card">
          <Calendar className="h-12 w-12 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Match Schedule</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Complete IPL schedule with venue details
          </p>
        </div>

        <div className="card">
          <Brain className="h-12 w-12 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Dream11 Analysis</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Expert predictions and fantasy team suggestions
          </p>
        </div>
      </div>

      {/* Live Matches Preview */}
      <section className="card">
        <h2 className="text-2xl font-bold mb-4">Live Matches</h2>
        <div className="text-center text-gray-600 dark:text-gray-300 py-8">
          No live matches at the moment. Check the schedule for upcoming games!
        </div>
      </section>

      {/* News Preview */}
      <section className="card">
        <h2 className="text-2xl font-bold mb-4">Latest News</h2>
        <div className="space-y-4">
          {/* Placeholder news items */}
          <div className="border-b dark:border-gray-700 pb-4">
            <h3 className="text-lg font-semibold mb-2">
              IPL 2024: New Season Announcements
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Latest updates and changes for the upcoming IPL season...
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;