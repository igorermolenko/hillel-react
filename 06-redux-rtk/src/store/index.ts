import { configureStore } from '@reduxjs/toolkit'
import {reducer as waiterReducer} from "../features/waiters/store/reducer";

export const store = configureStore({
    reducer: {
        waiter: waiterReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch