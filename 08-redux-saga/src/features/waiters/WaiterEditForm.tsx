import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getWaiter, saveWaiter} from "./store/thunks";
import {Page} from "../../components/Page";
import {useNavigate, useParams} from "react-router-dom";
import {EMPTY_WAITER, setWaiterActionSuccess} from "./store/reducer";
import {waiterCombinedSelector} from "./store/selectors";


export function WaiterEditForm() {
    let {id} = useParams();

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {waiter, waiterLoading, waiterError} = useSelector(waiterCombinedSelector)

    const [firstName, setName] = useState('')
    const [phone, setPhone] = useState('')

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        if (id) {
            // @ts-ignore
            dispatch(getWaiter(id))
        } else {
            dispatch(setWaiterActionSuccess(EMPTY_WAITER))
        }
    }, [id]);

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
            navigate("/waiters");
        } catch (e: any) {
            setError(e.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <Page
            title='Edit Waiter'
            loading={waiterLoading}
            error={waiterError}
        >
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
        </Page>
    )
}