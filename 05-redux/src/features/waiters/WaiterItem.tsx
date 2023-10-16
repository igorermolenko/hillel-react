import {WaiterI} from "./domain/types";
import {useDispatch} from "react-redux";
import {editWaitersAction} from "./store/actions";
import {deleteWaiter} from "./store/thunk";

interface WaiterItemPropsI {
    waiter: WaiterI;
}

export function WaiterItem({waiter}: WaiterItemPropsI) {
    const dispatch = useDispatch()

    function onEditClick() {
        dispatch(editWaitersAction(waiter))
    }

    function onDeleteClick() {
        // @ts-ignore
        dispatch(deleteWaiter(waiter))
    }

    return (
        <tr>
            <td>{waiter.id}</td>
            <td>{waiter.firstName}</td>
            <td>{waiter.phone}</td>
            <td>
                <button onClick={onEditClick}>Edit</button>
                <button onClick={onDeleteClick}>Delete</button>
            </td>
        </tr>
    )
}