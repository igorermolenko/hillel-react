import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {setFilterAction} from "./store/reducer";
import {TextField} from "@mui/material";

export function Filters() {
    const dispatch = useDispatch()
    const [searchParams, setSearchParams] = useSearchParams();
    const filter = searchParams.get('filter')
    const setFilter = (val: string) => setSearchParams(`filter=${val}`)

    useEffect(() => {
        dispatch(setFilterAction(filter ? filter : ''))
    }, [filter])


    return (
        <div>
            <TextField
                label="Name starts with"
                size="small"
                margin="none"
                value={filter ? filter : ""}
                autoComplete="off"
                onChange={e => setFilter(e.target.value)}
            />
        </div>
    )
}