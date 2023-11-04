import {NavLink} from "react-router-dom";
import React from "react";
import {useStyles} from "./styles";
import {Typography} from "@mui/material";

const menu = [
    {label: "Home", path: "/"},
    {label: "Waiters", path: "/waiters"},
    {label: "About", path: "/about"},
]

export function Navigation() {
    const {classes} = useStyles();
    const isActiveClass = ({isActive}: any) => isActive ? classes.active : "";

    const menuItems = menu.map(({label, path}) => (
        <NavLink to={path} className={isActiveClass}>
            <Typography variant="button" display="inline" component="h2">{label}</Typography>
        </NavLink>
    ))

    return (
        <nav className={classes.navigationItem}>
            {menuItems}
        </nav>
    )
}
