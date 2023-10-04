import {WaiterI} from "./domain/types";
import React, {useEffect} from "react";

interface FormPropsI {
    waiter: WaiterI;
    onSubmit: (waiter: WaiterI) => void;
}

export function WaiterEditForm({waiter, onSubmit}: FormPropsI) {
    const [firstName, setName] = React.useState('')
    const [phone, setPhone] = React.useState('')

    useEffect(() => {
        setName(waiter.firstName)
        setPhone(waiter.phone)
    }, [waiter])

    const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        onSubmit({
            ...waiter,
            firstName,
            phone,
        })

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