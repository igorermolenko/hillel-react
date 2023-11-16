import React from 'react';
import {Loading} from "./Loading";
import {Alert} from "./Alert";
import {Divider, Typography} from "@mui/material";

interface PropsI {
    title: string,
    loading?: boolean,
    error?: string,
    children?: React.ReactNode
}

export function Page({title, error, loading, children}: PropsI) {
    return (
        <div>
            <Typography variant="h4" component="h1">
                {title}
            </Typography>

            <Divider variant="fullWidth" sx={{marginBottom: "20px"}}/>

            {loading && <Loading/>}
            {error && <Alert message={error}/>}
            {!loading && !error && children}
        </div>
    )
}