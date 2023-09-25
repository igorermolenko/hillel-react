import {Waiter} from "./domain/types";
import {WaiterItem} from "./WaiterItem";

interface WaiterListProps {
    waiters: Waiter[];
}

export function WaiterList({waiters}: WaiterListProps): React.ReactElement {
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
                <WaiterItem waiter={waiter} key={waiter.id}/>
            ))}
            </tbody>
        </table>
    );
}