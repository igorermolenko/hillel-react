import {WaiterI} from "./domain/types";
import {WaiterItem} from "./WaiterItem";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getWaiters} from "./store/thunks";
import {Page} from "../../components/Page";
import {Link} from "react-router-dom";
import {Filters} from "./Filters";
import {filteredWaitersSelector} from "./store/selectors";


export function WaiterList(): React.ReactElement {
    const waiters = useSelector(filteredWaitersSelector)
    const loading = useSelector((state: any) => state.waiter.waitersLoading)
    const error = useSelector((state: any) => state.waiter.waitersError)

    const dispatch = useDispatch()

    useEffect(() => {
        // @ts-ignore
        dispatch(getWaiters())
    }, [getWaiters]);

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div style={{color: 'red'}}>{error.message}</div>
    }

    return (
        <Page
            title='Waiters List'
            loading={loading}
            error={error}
        >
            <Filters />
            <div>
                <Link to="/waiters/create">
                    <button>Create</button>
                </Link>
            </div>
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
                {waiters.map((waiter: WaiterI) => (
                    <WaiterItem key={waiter.id} waiter={waiter}/>
                ))}
                </tbody>
            </table>
        </Page>
    )
}