import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {saveWaiter} from "./store/thunks";


export function WaiterEditForm() {
    const dispatch = useDispatch()
    const waiter = useSelector((state: any) => state.waiter.currentWaiter)

    const [firstName, setName] = useState('')
    const [phone, setPhone] = useState('')

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        setName(waiter.firstName)
        setPhone(waiter.phone)
    }, [waiter])


    const onFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        setError('')
        setLoading(true)
        try {
            // @ts-ignore
            await dispatch(saveWaiter({
                ...waiter,
                firstName,
                phone,
            }))
        } catch (e: any) {
            setError(e.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <form onSubmit={onFormSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input value={firstName} onChange={e => setName(e.target.value)} type="text" id="name"/>
                </div>

                <div>
                    <label htmlFor="phone">Phone</label>
                    <input value={phone} onChange={e => setPhone(e.target.value)} type="text" id="phone"/>
                </div>

                <button type="submit" disabled={loading}>Submit</button>
            </form>

            {error && <div style={{color: 'red'}}>{error}</div>}
        </>
    )
}