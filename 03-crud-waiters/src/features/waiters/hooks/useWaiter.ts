import React, {useEffect} from "react";
import {WaiterI} from "../domain/types";
import {WaiterApi} from "../api/WaiterApi";

const EMPTY_WAITER: WaiterI = {
    firstName: '',
    phone: ''
}

export function useWaiter() {
    const [waiters, setWaiters] = React.useState<WaiterI[]>([])
    const [formData, setFormData] = React.useState<WaiterI>(EMPTY_WAITER)

    useEffect(() => {
        WaiterApi.getAll().then((waiters) => {
            setWaiters(waiters)
        })
    }, []);

    const saveWaiter = (waiter: WaiterI) => {
        if (waiter.firstName === '' || waiter.phone === '') {
            return
        }
        if (waiter.id) {
            WaiterApi.update(waiter.id, waiter).then((updatedWaiter) => {
                setWaiters(waiters.map((waiter) => waiter.id === updatedWaiter.id ? updatedWaiter : waiter))
            })
        } else {
            WaiterApi.create(waiter).then((newWaiter) => {
                setWaiters([...waiters, newWaiter])
            })
        }
        setFormData({...EMPTY_WAITER})
    }

    const deleteWaiter = (id: number) => {
        WaiterApi.delete(id).then(() => {
            setWaiters(waiters.filter((waiter) => waiter.id !== id))
        })
    }

    const editWaiter = (waiter: WaiterI) => {
        setFormData(waiter)
    }


    return {
        formData,
        waiters,
        saveWaiter,
        deleteWaiter,
        editWaiter
    }
}