import React from "react";
import {WaiterList} from "./WaiterList";
import {WaiterEditForm} from "./WaiterEditForm";
import {useWaiter} from "./hooks/useWaiter";


export function WaitersComponent() {

    const {formData, waiters, saveWaiter, deleteWaiter, editWaiter} = useWaiter()

    return (
        <div>
            <WaiterEditForm waiter={formData} onSubmit={saveWaiter}/>
            <WaiterList waiters={waiters} deleteWaiter={deleteWaiter} editWaiter={editWaiter}/>
        </div>
    );
}
