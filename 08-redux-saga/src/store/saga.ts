import {all} from 'redux-saga/effects';
import {waiterWatch} from "../features/waiters/store/saga";

export function* rootSaga() {
    yield all([
        waiterWatch()
    ]);

}