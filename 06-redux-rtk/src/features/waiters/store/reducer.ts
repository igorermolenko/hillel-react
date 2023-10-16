import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {WaiterI} from "../domain/types";


const EMPTY_WAITER: WaiterI = {
    firstName: '',
    phone: ''
}

interface WaiterStateI {
    currentWaiter: WaiterI;
    waiters: WaiterI[];
    waitersLoading: boolean,
    waitersError?: Error,
}

const INITIAL_STATE: WaiterStateI = {
    currentWaiter: EMPTY_WAITER,
    waiters: [],
    waitersLoading: false,
    waitersError: undefined
}


export const waiterSlice = createSlice({
    name: 'waiter',
    initialState: INITIAL_STATE,
    reducers: {
        setWaitersActionLoading: (state: WaiterStateI) => {
            state.waitersError = undefined
            state.waitersLoading = true
        },
        setWaitersActionSuccess: (state: WaiterStateI, action: PayloadAction<WaiterI[]>) => {
            state.waiters = action.payload
            state.waitersLoading = false
        },
        setWaitersActionError: (state: WaiterStateI, action: PayloadAction<Error>) => {
            state.waitersError = action.payload
            state.waitersLoading = false
        },
        setEditingWaiterAction: (state: WaiterStateI, action: PayloadAction<WaiterI>) => {
            state.currentWaiter = action.payload
        },
        updateWaiterAction: (state: WaiterStateI, action: PayloadAction<WaiterI>) => {
            state.waiters = state.waiters.map((waiter: WaiterI) => waiter.id === action.payload.id ? action.payload : waiter)
            state.currentWaiter = {...EMPTY_WAITER}
        },
        createWaiterAction: (state: WaiterStateI, action: PayloadAction<WaiterI>) => {
            state.waiters = [...state.waiters, action.payload]
            state.currentWaiter = {...EMPTY_WAITER}
        },
        deleteWaiterAction: (state: WaiterStateI, action: PayloadAction<number>) => {
            state.waiters = state.waiters.filter((waiter: WaiterI) => waiter.id !== action.payload)
            state.currentWaiter = {...EMPTY_WAITER}
        }
    },
})

export const { actions, reducer } = waiterSlice
export const {
    setWaitersActionLoading,
    setWaitersActionSuccess,
    setWaitersActionError,
    setEditingWaiterAction,
    updateWaiterAction,
    createWaiterAction,
    deleteWaiterAction
} = actions
