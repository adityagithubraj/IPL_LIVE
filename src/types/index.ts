export interface User {
  id: string;
  username: string;
  email: string;
}

export interface Match {
  id: string;
  team1: Team;
  team2: Team;
  date: string;
  venue: string;
  status: 'upcoming' | 'live' | 'completed';
  score?: {
    team1: Score;
    team2: Score;
  };
}

export interface Team {
  id: string;
  name: string;
  shortName: string;
  logoUrl: string;
  players: Player[];
}

export interface Player {
  id: string;
  name: string;
  role: 'batsman' | 'bowler' | 'all-rounder' | 'wicket-keeper';
  stats: PlayerStats;
}

export interface PlayerStats {
  matches: number;
  runs: number;
  wickets: number;
  average: number;
  strikeRate: number;
  economyRate: number;
}

export interface Score {
  runs: number;
  wickets: number;
  overs: number;
}

export interface Dream11Prediction {
  captain: Player;
  viceCaptain: Player;
  suggestedTeam: Player[];
  analysis: string;
}


//origin  https://github.com/adityagithubraj/IPL_LIVE.git (fetch)
//origin  https://github.com/adityagithubraj/IPL_LIVE.git (push)
//git remote add origin https://github.com/adityagithubraj/IPL_LIVE.git
