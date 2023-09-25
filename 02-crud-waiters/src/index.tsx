import React from 'react';
import ReactDOM from 'react-dom/client';
import {WaitersComponent} from "./components/waiters";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(<WaitersComponent/>);

