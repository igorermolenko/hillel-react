import {WaiterI} from "../domain/types";

export const ACTION_SET_WAITERS_LOADING = 'ACTION_SET_WAITERS_LOADING'
export const ACTION_SET_WAITERS_SUCCESS = 'ACTION_SET_WAITERS_SUCCESS'
export const ACTION_SET_WAITERS_ERROR = 'ACTION_SET_WAITERS_ERROR'
export const ACTION_EDIT_WAITER = 'ACTION_EDIT_WAITER'
export const ACTION_UPDATE_WAITER = 'ACTION_UPDATE_WAITER'
export const ACTION_CREATE_WAITER = 'ACTION_CREATE_WAITER'
export const ACTION_DELETE_WAITER = 'ACTION_DELETE_WAITER'

export function setWaitersLoadingAction() {
    return {
        type: ACTION_SET_WAITERS_LOADING
    }
}

export function setWaitersSuccessAction(waiters: WaiterI[]) {
    return {
        type: ACTION_SET_WAITERS_SUCCESS,
        payload: waiters
    }
}

export function setWaitersErrorAction(error: Error) {
    return {
        type: ACTION_SET_WAITERS_ERROR,
        payload: error
    }
}

export function editWaitersAction(waiter: WaiterI) {
    return {
        type: ACTION_EDIT_WAITER,
        payload: waiter
    }
}

export function updateWaiterAction(waiter: WaiterI) {
    return {
        type: ACTION_UPDATE_WAITER,
        payload: waiter
    }
}

export function createWaiterAction(waiter: WaiterI) {
    return {
        type: ACTION_CREATE_WAITER,
        payload: waiter,
    }
}

export function deleteWaiterAction(id: number) {
    return {
        type: ACTION_DELETE_WAITER,
        payload: id,
    }
}
