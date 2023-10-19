import React from "react";
import {WaiterList} from "./WaiterList";
import {WaiterEditForm} from "./WaiterEditForm";


export function WaitersComponent() {
    return (
        <div>
            <WaiterEditForm/>
            <WaiterList/>
        </div>
    );
}
