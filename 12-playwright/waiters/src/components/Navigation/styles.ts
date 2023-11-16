import {makeStyles} from "tss-react/mui";

export const useStyles = makeStyles()(() => {
    return {
        active: {
            color: 'red',
        },
        navigationItem: {
            display: 'flex',
            gap: '15px',
        }
    }
});