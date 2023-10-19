import {Provider} from "react-redux";
import {store} from "./store";
import {WaitersComponent} from "./features/waiters";
import React from "react";

export function App() {
    return (
        <Provider store={store}>
            <WaitersComponent/>
        </Provider>
    );
}


