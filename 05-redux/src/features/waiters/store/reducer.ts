import {WaiterI} from "../domain/types";
import {
    ACTION_CREATE_WAITER,
    ACTION_DELETE_WAITER,
    ACTION_EDIT_WAITER, ACTION_SET_WAITERS_ERROR, ACTION_SET_WAITERS_LOADING, ACTION_SET_WAITERS_SUCCESS,
    ACTION_UPDATE_WAITER
} from "./actions";

const EMPTY_WAITER: WaiterI = {
    firstName: '',
    phone: ''
}

interface INITIAL_STATE_I {
    currentWaiter: WaiterI;
    waiters: WaiterI[];
    waitersLoading: boolean,
    waitersError?: Error,
}

const INITIAL_STATE: INITIAL_STATE_I = {
    currentWaiter: EMPTY_WAITER,
    waiters: [],
    waitersLoading: false,
    waitersError: undefined
}


export const reducer = (state = INITIAL_STATE, {type, payload}: any) => {
    switch (type) {
        case ACTION_SET_WAITERS_LOADING:
            return {...state, waiters: payload, waitersLoading: true, waitersError: undefined}
        case ACTION_SET_WAITERS_SUCCESS:
            return {...state, waiters: payload, waitersLoading: false}
        case ACTION_SET_WAITERS_ERROR:
            return {...state, waiters: [], waitersLoading: false, waitersError: payload}
        case ACTION_EDIT_WAITER:
            return {...state, currentWaiter: payload}
        case ACTION_UPDATE_WAITER:
            return {
                ...state,
                waiters: state.waiters.map((waiter: WaiterI) => waiter.id == payload.id ? payload : waiter),
                currentWaiter: {...EMPTY_WAITER}
            }
        case ACTION_CREATE_WAITER:
            return {
                ...state,
                waiters: [...state.waiters, payload],
                currentWaiter: {...EMPTY_WAITER}
            }
        case ACTION_DELETE_WAITER:
            return {
                ...state,
                waiters: state.waiters.filter((waiter: WaiterI) => waiter.id !== payload),
                currentWaiter: {...EMPTY_WAITER}
            }
        default:
            return state;
    }
}