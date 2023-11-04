import {createSelector} from "@reduxjs/toolkit";
import {RootState} from "../../../store";

export const waiterSelector = (state: RootState) => state.waiter.currentWaiter
export const waiterLoadingSelector = (state: RootState) => state.waiter.waiterLoading
export const waiterErrorSelector = (state: RootState) => state.waiter.waiterError

export const waitersSelector = (state: RootState) => state.waiter.waiters
export const filterSelector = (state: RootState) => state.waiter.filter

export const waiterCombinedSelector = createSelector(
    waiterSelector,
    waiterLoadingSelector,
    waiterErrorSelector,
    (waiter, waiterLoading, waiterError) => ({
        waiter,
        waiterLoading,
        waiterError,
    })
);

export const filteredWaitersSelector = createSelector(
    waitersSelector,
    filterSelector,
    (waiters, filter) => {
        return waiters.filter((waiter) => waiter.firstName.toLowerCase().includes(filter.toLowerCase()))
    }
);