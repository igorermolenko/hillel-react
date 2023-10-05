import {WaiterI} from "./domain/types";

interface WaiterItemPropsI {
    waiter: WaiterI;
    deleteWaiter: (id: number) => void;
    editWaiter: (waiter: WaiterI) => void;
}

export function WaiterItem({waiter, deleteWaiter, editWaiter}: WaiterItemPropsI) {

    function onEditClick() {
        editWaiter(waiter)
    }

    function onDeleteClick() {
        if (waiter.id) {
            deleteWaiter(waiter.id)
        }
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