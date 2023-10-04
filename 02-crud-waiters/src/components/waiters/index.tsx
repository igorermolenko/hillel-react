import React, {useEffect} from "react";
import {WaiterList} from "./WaiterList";
import {Waiter} from "./domain/types";
import {WaiterApi} from "./api/WaiterApi";
import {WaiterEditForm} from "./WaiterEditForm";


export function WaitersComponent() {

    const [waiters, setWaiters] = React.useState<Waiter[]>([])

    useEffect(() => {
        WaiterApi.getAll().then((waiters) => {
            setWaiters(waiters)
        })
    }, []);

    const addWaiter = (waiter: Waiter) => {
        WaiterApi.create(waiter).then((newWaiter) => {
            setWaiters([...waiters, newWaiter])
        })
    }

    return (
        <div>
            <WaiterEditForm onSubmit={addWaiter}/>
            <WaiterList waiters={waiters}/>
        </div>
    );
}
