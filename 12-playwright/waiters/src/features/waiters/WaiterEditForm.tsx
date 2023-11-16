import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getWaiter, saveWaiter} from "./store/thunks";
import {Page} from "../../components/Page";
import {useNavigate, useParams} from "react-router-dom";
import {EMPTY_WAITER, setWaiterActionSuccess} from "./store/reducer";
import {waiterCombinedSelector} from "./store/selectors";
import {Button, Grid, TextField} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';


export function WaiterEditForm() {
    let {id} = useParams();

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {waiter, waiterLoading, waiterError} = useSelector(waiterCombinedSelector)

    const [firstName, setName] = useState('')
    const [phone, setPhone] = useState('')

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        if (id) {
            // @ts-ignore
            dispatch(getWaiter(id))
        } else {
            dispatch(setWaiterActionSuccess(EMPTY_WAITER))
        }
    }, [id]);

    useEffect(() => {
        setName(waiter.firstName)
        setPhone(waiter.phone)
    }, [waiter])


    const onFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        setError('')
        setLoading(true)
        try {
            // @ts-ignore
            await dispatch(saveWaiter({
                ...waiter,
                firstName,
                phone,
            }))
            navigate("/waiters");
        } catch (e: any) {
            setError(e.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <Page
            title='Edit Waiter'
            loading={waiterLoading}
            error={waiterError}
        >
            <form onSubmit={onFormSubmit}>
                <Grid container spacing={1}>
                    <Grid item xs={8}>
                        <TextField
                            required
                            label="Name"
                            size="small"
                            margin="none"
                            value={firstName}
                            onChange={e => setName(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={8}>
                        <TextField
                            required
                            label="Phone"
                            size="small"
                            margin="none"
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Button variant="contained" endIcon={<SendIcon/>} type="submit" disabled={loading}>
                            Save
                        </Button>
                    </Grid>
                </Grid>

            </form>

            {error && <div style={{color: 'red'}}>{error}</div>}
        </Page>
    )
}