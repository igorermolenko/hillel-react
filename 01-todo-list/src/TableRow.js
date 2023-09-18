export default function TableRow({item}) {
    return <tr>
        <td>{item.text}</td>
        <td>{item.isCompleted ? 'Yes' : 'No'}</td>
    </tr>
}


