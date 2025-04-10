import React from 'react';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import errorImage from '../assets/2.png'; // ✅ Rename the import

const useStyles = makeStyles({
    error: {
        width: '80%',
        height: 'auto',
        objectPosition: 'center 0%',
        margin: 'auto'
    }
});

const ErrorScreen = () => {
    const classes = useStyles();

    return (
        <Box>
            <Typography mt={2} mb={2}>Response</Typography>
            <Box style={{ display: 'flex' }}>
                <img src={errorImage} alt="Error" className={classes.error} />
            </Box>
        </Box>
    );
};

export default ErrorScreen;
