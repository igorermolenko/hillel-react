import {WaiterI} from "./domain/types";
import {WaiterItem} from "./WaiterItem";
import {useAppDispatch, useAppSelector} from "../../hooks";
import React, {useEffect} from "react";
import {Page} from "../../components/Page";
import {Link} from "react-router-dom";
import {Filters} from "./Filters";
import {filteredWaitersSelector} from "./store/selectors";
import {setWaitersActionRequest} from "./store/reducer";
import {Box, Button, Stack} from "@mui/material";


export function WaiterList(): React.ReactElement {
    const waiters = useAppSelector(filteredWaitersSelector)
    const loading = useAppSelector((state) => state.waiter.waitersLoading)
    const error = useAppSelector((state) => state.waiter.waitersError)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(setWaitersActionRequest())
    }, [dispatch, setWaitersActionRequest]);

    return (
        <Page
            title='Waiters List'
            loading={loading}
            error={error}
        >
            <Stack spacing={2}>
                <Filters/>
                <Box sx={{textAlign: "right"}}>
                    <div>
                        <Link to="/waiters/create">
                            <Button variant="outlined" size="small" color="primary">Create</Button>
                        </Link>
                    </div>
                </Box>
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
            </Stack>
        </Page>
    )
}