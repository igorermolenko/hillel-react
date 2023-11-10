import {WaiterI} from "./domain/types";
import {useDispatch} from "react-redux";
import {deleteWaiter} from "./store/thunks";
import React, {useState} from "react";
import {Link} from "react-router-dom";

interface WaiterItemPropsI {
    waiter: WaiterI;
}

export function WaiterItem({waiter}: WaiterItemPropsI) {
    const dispatch = useDispatch()

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    async function onDeleteClick() {
        if (waiter.id) {
            setError('')
            setLoading(true)

            try {
                // @ts-ignore
                await dispatch(deleteWaiter(waiter))
            } catch (e: any) {
                setError(e.message)
            } finally {
                setLoading(false)
            }
        }
    }

    return (
        <tr>
            <td>{waiter.id}</td>
            <td>{waiter.firstName}</td>
            <td>{waiter.phone}</td>
            <td>
                <Link to={`/waiters/edit/${waiter.id}`}>
                    <button disabled={loading}>Edit</button>
                </Link>
                <button onClick={onDeleteClick} disabled={loading}>Delete</button>
                {error && <span style={{color: 'red'}}>{error}</span>}
            </td>
        </tr>
    )
}