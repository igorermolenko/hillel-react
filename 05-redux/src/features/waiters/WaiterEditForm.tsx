import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {saveWaiter} from "./store/thunk";


export function WaiterEditForm() {
    const [firstName, setName] = React.useState('')
    const [phone, setPhone] = React.useState('')

    const dispatch = useDispatch()
    const waiter = useSelector((state: any) => state.waiter.currentWaiter)

    useEffect(() => {
        setName(waiter.firstName)
        setPhone(waiter.phone)
    }, [waiter])


    const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        // @ts-ignore
        dispatch(saveWaiter({
            ...waiter,
            firstName,
            phone,
        }))

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