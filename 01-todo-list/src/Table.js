import TableRow from './TableRow.js';

export default function Table({items}) {
    return <table>
        <thead>
        <tr>
            <th>Task</th>
            <th>Completed</th>
        </tr>
        </thead>
        <tbody>
        {items.map(item => <TableRow key={item.id} item={item}/>)}
        </tbody>
    </table>


}


