import {WaiterApi} from "../api/WaiterApi";
import {WaiterI} from "../domain/types";
import {
    createWaiterAction,
    deleteWaiterAction,
    setWaitersActionError,
    setWaitersActionLoading,
    setWaitersActionSuccess,
    updateWaiterAction
} from "./reducer";

export function getWaiters() {
    return (dispatch: any) => {
        dispatch(setWaitersActionLoading())
        WaiterApi
            .getAll()
            .then((waiters) => {
                dispatch(setWaitersActionSuccess(waiters))
            })
            .catch((error) => {
                dispatch(setWaitersActionError(error))
            })
    }
}

export function saveWaiter(waiter: WaiterI) {
    return async (dispatch: any) => {
        if (waiter.firstName === '' || waiter.phone === '') {
            return
        }
        if (waiter.id) {
            const updatedWaiter = await WaiterApi.update(waiter.id, waiter)
            dispatch(updateWaiterAction(updatedWaiter))
        } else {
            const newWaiter = await WaiterApi.create(waiter)
            dispatch(createWaiterAction(newWaiter))
        }
    }
}

export function deleteWaiter(waiter: WaiterI) {
    return async (dispatch: any) => {
        await WaiterApi.delete(waiter.id!)
        dispatch(deleteWaiterAction(waiter.id!))
    }
}