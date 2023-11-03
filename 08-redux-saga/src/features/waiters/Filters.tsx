import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {setFilterAction} from "./store/reducer";

export function Filters() {
    const dispatch = useDispatch()
    const [searchParams, setSearchParams] = useSearchParams();
    const filter = searchParams.get('filter')
    const setFilter = (val: string) => setSearchParams(`filter=${val}`)

    useEffect(() => {
        dispatch(setFilterAction(filter ? filter : ''))
    }, [filter])


    return (
        <div style={{marginBottom: '10px'}}>
            <input value={filter ? filter : ""}
                   autoComplete="off"
                   onChange={e => setFilter(e.target.value)} type="text" id="name"/>
        </div>
    )
}