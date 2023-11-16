import {makeStyles} from "tss-react/mui";

export const useStyles = makeStyles()(() => {
    return {
        active: {
            color: 'red',
        },
        apply: {
            marginRight: '20px',
        }
    }
});