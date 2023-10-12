import {WaiterApi} from "../api/WaiterApi";
import {
    createWaiterAction,
    deleteWaiterAction,
    setWaitersErrorAction,
    setWaitersLoadingAction,
    setWaitersSuccessAction,
    updateWaiterAction
} from "./actions";
import {WaiterI} from "../domain/types";

export function getWaiters() {
    return (dispatch: any) => {
        dispatch(setWaitersLoadingAction())
        WaiterApi
            .getAll()
            .then((waiters) => {
                dispatch(setWaitersSuccessAction(waiters))
            })
            .catch((error) => {
                dispatch(setWaitersErrorAction(error))
            })
    }
}

export function saveWaiter(waiter: WaiterI) {
    return (dispatch: any) => {
        if (waiter.firstName === '' || waiter.phone === '') {
            return
        }
        if (waiter.id) {
            WaiterApi.update(waiter.id, waiter).then((updatedWaiter) => {
                dispatch(updateWaiterAction(updatedWaiter))
            })
        } else {
            WaiterApi.create(waiter).then((newWaiter) => {
                dispatch(createWaiterAction(newWaiter))
            })
        }
    }
}

export function deleteWaiter(waiter: WaiterI) {
    return (dispatch: any) => {
        if (waiter.id) {
            WaiterApi.delete(waiter.id).then(() => {
                dispatch(deleteWaiterAction(waiter.id!))
            })
        }
    }
}