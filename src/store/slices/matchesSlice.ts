import { createSlice } from '@reduxjs/toolkit';
import type { Match } from '../../types';

interface MatchesState {
  liveMatches: Match[];
  upcomingMatches: Match[];
  completedMatches: Match[];
  loading: boolean;
  error: string | null;
}

const initialState: MatchesState = {
  liveMatches: [],
  upcomingMatches: [],
  completedMatches: [],
  loading: false,
  error: null,
};

const matchesSlice = createSlice({
  name: 'matches',
  initialState,
  reducers: {
    setLiveMatches: (state, action) => {
      state.liveMatches = action.payload;
    },
    setUpcomingMatches: (state, action) => {
      state.upcomingMatches = action.payload;
    },
    setCompletedMatches: (state, action) => {
      state.completedMatches = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  setLiveMatches,
  setUpcomingMatches,
  setCompletedMatches,
  setLoading,
  setError,
} = matchesSlice.actions;

export default matchesSlice.reducer;