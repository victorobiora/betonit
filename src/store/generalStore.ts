import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

export type leagueDataFormat = {
  away_team: string;
  home_team: string;
  id: string;
  time: string;
  odds: {
    h2h: {
      away_team_win: number;
      draw: number;
      home_team_win: number;
    };
    totals: {
      over: number;
      point: number;
      under: number;
    };
  };
};

const futureGamesInitialState: {
  leagueData: leagueDataFormat[];
} = {
  leagueData: [
    {
      id: "f9797be65a325bc844892ebd2dd41a98",
      home_team: "Tottenham Hotspur",
      away_team: "Chelsea",
      time: "2023-11-06T20:00:00Z",
      odds: {
        h2h: {
          away_team_win: 2.33,
          home_team_win: 2.95,
          draw: 3.55,
        },
        totals: {
          point: 0.5,
          over: 1.67,
          under: 2.3,
        },
      },
    },
  ],
};

const futureGamesSlice = createSlice({
  name: "futureGamesData",
  initialState: futureGamesInitialState,
  reducers: {
    updateLeagueData(state, action: PayloadAction<leagueDataFormat[]>) {
      console.log(action.payload);
      state.leagueData = action.payload;
    },
  },
});

const loggedInSlice = createSlice({
  name: "loggedInStatus",
  initialState: {
    areWeLoggedIn: false,
  },
  reducers: {
    logIn(state) {
    
      state.areWeLoggedIn = true;
    },
    logOut: (state) => {
      console.log('vjdiii4i')
      state.areWeLoggedIn = false;
    },
  },
});

export const futureGamesActions = futureGamesSlice.actions;
export const logInActions = loggedInSlice.actions;

const store = configureStore({
  reducer: {
    futureGamesData: futureGamesSlice.reducer,
    logInStatus: loggedInSlice.reducer
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
