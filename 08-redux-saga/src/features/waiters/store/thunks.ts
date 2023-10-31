import {WaiterApi} from "../api/WaiterApi";
import {WaiterI} from "../domain/types";
import {
    createWaiterAction,
    deleteWaiterAction,
    setWaiterActionError,
    setWaiterActionRequest,
    setWaiterActionSuccess,
    updateWaiterAction
} from "./reducer";

 export function getWaiter(id: number) {
    return async (dispatch: any) => {
        dispatch(setWaiterActionRequest())
        try {
            const waiter = await WaiterApi.get(id)
            dispatch(setWaiterActionSuccess(waiter))
        } catch (error: any) {
            dispatch(setWaiterActionError(error.message))
        }
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