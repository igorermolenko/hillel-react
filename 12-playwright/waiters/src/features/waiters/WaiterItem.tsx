import {WaiterI} from "./domain/types";
import {deleteWaiter} from "./store/thunks";
import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useAppDispatch} from "../../hooks";
import {IconButton} from "@mui/material";
import EditIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';

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
                    <IconButton aria-label="Edit waiter" color="primary">
                        <EditIcon/>
                    </IconButton>
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
            <IconButton aria-label="Delete waiter" color="secondary" onClick={onDeleteClick} disabled={loading}>
                <DeleteIcon/>
            </IconButton>
            {error && <span style={{color: 'red'}}>{error}</span>}
        </>
    )
}