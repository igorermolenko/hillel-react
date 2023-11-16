import {all, call, put, takeEvery} from 'redux-saga/effects';
import {setWaitersActionError, setWaitersActionRequest, setWaitersActionSuccess} from "./reducer";
import {WaiterApi} from "../api/WaiterApi";
import {WaiterI} from "../domain/types";

function* getWaitersWorker() {
    try {
        const waiters:WaiterI[] = yield call([WaiterApi, 'getAll'])
        yield put(setWaitersActionSuccess(waiters))
    } catch (error: any) {
        yield put(setWaitersActionError(error.message))
    }
}

export function* waiterWatch() {
    yield all([
        takeEvery(setWaitersActionRequest, getWaitersWorker)
    ])
}