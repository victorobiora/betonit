import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
// ...

const futureGamesInitialState: {
    leagueData: string
} = {
  leagueData: 'kdf'
}

const futureGamesSlice =  createSlice({
    name: 'futureGames',
    initialState: futureGamesInitialState,
    reducers: {
        updateLeagueData(state, action: PayloadAction<string>) {
             state.leagueData = action.payload   
        }
    }
})

const store = configureStore({
  reducer: {},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
