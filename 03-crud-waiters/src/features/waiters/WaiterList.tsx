import {WaiterI} from "./domain/types";
import {WaiterItem} from "./WaiterItem";

interface WaiterListPropsI {
    waiters: WaiterI[];
    deleteWaiter: (id: number) => void;
    editWaiter: (waiter: WaiterI) => void;
}

export function WaiterList({waiters, deleteWaiter, editWaiter}: WaiterListPropsI): React.ReactElement {
    return (
        <table>
            <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {waiters.map((waiter) => (
                <WaiterItem key={waiter.id} waiter={waiter} deleteWaiter={deleteWaiter} editWaiter={editWaiter}/>
            ))}
            </tbody>
        </table>
    );
}