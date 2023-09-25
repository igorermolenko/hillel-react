import React from 'react';
import ReactDOM from 'react-dom/client';
import Table from './Table.js';

const todoList = [
    { id: 1, text: 'Learn React', isCompleted: true },
    { id: 2, text: 'Learn Redux', isCompleted: false },
    { id: 3, text: 'Learn React Router', isCompleted: false },
    { id: 4, text: 'Learn React Native', isCompleted: false },
    { id: 5, text: 'Learn GraphQL', isCompleted: false },
]

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <Table items={todoList}/>
    </>
);

