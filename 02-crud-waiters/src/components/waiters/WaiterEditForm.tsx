import {Waiter} from "./domain/types";
import React from "react";

interface FormProps {
    onSubmit: (waiter: Waiter) => void;
}

export function WaiterEditForm({onSubmit}: FormProps) {
    const [firstName, setName] = React.useState('')
    const [phone, setPhone] = React.useState('')

    const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        onSubmit({
            firstName,
            phone,
        })

        setName('')
        setPhone('')
    }

    return (
        <form onSubmit={onFormSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input value={firstName} onChange={e => setName(e.target.value)} type="text" id="name"/>
            </div>

            <div>
                <label htmlFor="phone">Phone</label>
                <input value={phone} onChange={e => setPhone(e.target.value)} type="text" id="phone"/>
            </div>

            <button type="submit">Submit</button>
        </form>
    )
}