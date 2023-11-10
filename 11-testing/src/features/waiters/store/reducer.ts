import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {WaiterI} from "../domain/types";


export const EMPTY_WAITER: WaiterI = {
    firstName: '',
    phone: ''
}

interface WaiterStateI {
    currentWaiter: WaiterI;
    waiters: WaiterI[];
    filter: string;
    waitersLoading: boolean,
    waitersError?: string,
    waiterLoading: boolean,
    waiterError?: string
}

const INITIAL_STATE: WaiterStateI = {
    currentWaiter: EMPTY_WAITER,
    waiters: [],
    filter: '',
    waitersLoading: false,
    waitersError: '',
    waiterLoading: false,
    waiterError: ''
}


export const waiterSlice = createSlice({
    name: 'waiter',
    initialState: INITIAL_STATE,
    reducers: {
        setFilterAction: (state: WaiterStateI, action: PayloadAction<string>) => {
            state.filter = action.payload
        },
        setWaitersActionLoading: (state: WaiterStateI) => {
            state.waitersError = undefined
            state.waitersLoading = true
        },
        setWaitersActionSuccess: (state: WaiterStateI, action: PayloadAction<WaiterI[]>) => {
            state.waiters = action.payload
            state.waitersLoading = false
        },
        setWaitersActionError: (state: WaiterStateI, action: PayloadAction<string>) => {
            state.waitersError = action.payload
            state.waitersLoading = false
        },
        setWaiterActionLoading: (state: WaiterStateI) => {
            state.waiterError = undefined
            state.waiterLoading = true
        },
        setWaiterActionSuccess: (state: WaiterStateI, action: PayloadAction<WaiterI>) => {
            state.currentWaiter = action.payload
            state.waiterLoading = false
        },
        setWaiterActionError: (state: WaiterStateI, action: PayloadAction<string>) => {
            state.waiterError = action.payload
            state.waiterLoading = false
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
    setFilterAction,
    setWaitersActionLoading,
    setWaitersActionSuccess,
    setWaitersActionError,
    setWaiterActionLoading,
    setWaiterActionSuccess,
    setWaiterActionError,
    updateWaiterAction,
    createWaiterAction,
    deleteWaiterAction
} = actions
