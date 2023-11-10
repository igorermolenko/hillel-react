import React from "react";
import {WaiterList} from "./WaiterList";
import {WaiterEditForm} from "./WaiterEditForm";
import {Route, Routes} from "react-router-dom";
import {ErrorComponent} from "../error";


export function WaitersComponent() {
    return (
        <Routes>
            <Route path="/" element={<WaiterList/>}/>
            <Route path="/create" element={<WaiterEditForm/>}/>
            <Route path="/edit/:id" element={<WaiterEditForm/>}/>
            <Route path="*" element={<ErrorComponent/>}/>
        </Routes>
    )
}
