import {WaiterI} from "./domain/types";
import {deleteWaiter} from "./store/thunks";
import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useAppDispatch} from "../../hooks";

interface WaiterItemPropsI {
    waiter: WaiterI;
}

export function WaiterItem({waiter}: WaiterItemPropsI) {

    return (
        <tr>
            <td>{waiter.id}</td>
            <td>{waiter.firstName}</td>
            <td>{waiter.phone}</td>
            <td>
                <Link to={`/waiters/edit/${waiter.id}`}>
                    <button>Edit</button>
                </Link>
                <DeleteButton waiter={waiter}/>
            </td>
        </tr>
    )
}

function DeleteButton({waiter}: WaiterItemPropsI) {
    const dispatch = useAppDispatch()

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    async function onDeleteClick() {
        if (waiter.id) {
            setError('')
            setLoading(true)

            try {
                await dispatch(deleteWaiter(waiter))
            } catch (e: any) {
                setError(e.message)
            } finally {
                setLoading(false)
            }
        }
    }

    return (
        <>
            <button onClick={onDeleteClick} disabled={loading}>Delete</button>
            {error && <span style={{color: 'red'}}>{error}</span>}
        </>
    )
}