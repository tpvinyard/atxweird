import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    main: {
        marginTop: '25vh'
    },
    mainText: {
        fontSize: '20vh',
        color: '#F5F5F5'
    }

}))

const Message = () => {
    const classes = useStyles();
    return (
        <div className={classes.main}>
            <Typography className={classes.mainText} align="center" color="textPrimary">
                NOPE
            </Typography>
        </div>
    );
};

export default Message;